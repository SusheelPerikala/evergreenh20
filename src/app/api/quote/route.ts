import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuoteRequest = Record<"firstName" | "lastName" | "email" | "phone" | "waterConcern" | "message" | "website", unknown>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character] || character);
}

export async function POST(request: Request) {
  let body: Partial<QuoteRequest>;
  try {
    body = await request.json() as Partial<QuoteRequest>;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website, 200)) return NextResponse.json({ message: "Quote request received." });

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 254);
  const phone = clean(body.phone, 40);
  const waterConcern = clean(body.waterConcern, 120) || "Not specified";
  const message = clean(body.message, 3000) || "No additional details provided.";

  if (!firstName || !lastName || !emailPattern.test(email)) {
    return NextResponse.json({ message: "Please enter your name and a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@evergreenh20.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Evergreen H2O Website <quotes@evergreenh20.com>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ message: "Email service is temporarily unavailable. Please email us directly." }, { status: 503 });
  }

  const safe = {
    firstName: escapeHtml(firstName), lastName: escapeHtml(lastName), email: escapeHtml(email),
    phone: escapeHtml(phone || "Not provided"), waterConcern: escapeHtml(waterConcern),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  const { error } = await new Resend(apiKey).emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `New quote request from ${firstName} ${lastName}`,
    text: [`Name: ${firstName} ${lastName}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, `Water concern: ${waterConcern}`, "", message].join("\n"),
    html: `<h1>New website quote request</h1><p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Water concern:</strong> ${safe.waterConcern}</p><p><strong>Home details:</strong><br />${safe.message}</p>`,
  });

  if (error) {
    console.error("Resend quote email failed:", error.name);
    return NextResponse.json({ message: "We could not send your request. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ message: "Quote request sent." });
}

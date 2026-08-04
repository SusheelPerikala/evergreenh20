"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./icon";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("sending");
    setStatusMessage("Sending your request…");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "We could not send your request.");

      form.reset();
      setSubmissionState("success");
      setStatusMessage("Thank you — your quote request was sent. We’ll be in touch soon.");
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(error instanceof Error ? error.message : "We could not send your request. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>First name<input name="firstName" autoComplete="given-name" maxLength={80} required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" maxLength={80} required /></label>
      </div>
      <div className="form-row">
        <label>Email<input type="email" name="email" autoComplete="email" maxLength={254} required /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" maxLength={40} /></label>
      </div>
      <label>What are you noticing?
        <select name="waterConcern" defaultValue="">
          <option value="" disabled>Select a water concern</option>
          <option>Hard water or scale</option>
          <option>Chlorine taste or odor</option>
          <option>Sediment</option>
          <option>Drinking water quality</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>Tell us about your home<textarea name="message" rows={5} maxLength={3000} placeholder="Household size, location, current equipment, or anything else useful." /></label>
      <label className="form-honeypot" aria-hidden="true">Company website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button form-submit" type="submit" disabled={submissionState === "sending"}>
        {submissionState === "sending" ? "Sending…" : "Request my quote"} <Icon name="arrow" />
      </button>
      <p className={`form-status ${submissionState}`} role="status" aria-live="polite">{statusMessage}</p>
      <small>Your information is used only to respond to your quote request.</small>
    </form>
  );
}

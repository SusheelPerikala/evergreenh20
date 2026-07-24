import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EvergreenH20 — Better water for your whole home",
    template: "%s · EvergreenH20",
  },
  description:
    "Professional whole-home, reverse-osmosis, countertop, and shower water filtration systems.",
  applicationName: "EvergreenH20",
  category: "Water filtration",
};

export const viewport: Viewport = {
  themeColor: "#15372f",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

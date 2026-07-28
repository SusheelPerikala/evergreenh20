import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://evergreenh20.com"),
  title: {
    default: "Evergreen H2O | Better Water, Built Better",
    template: "%s | Evergreen H2O",
  },
  description: "Premium whole-home and drinking-water treatment systems built with high-flow components and professional installation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

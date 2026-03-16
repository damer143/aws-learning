import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morphy | AWS Learning Resume Site",
  description: "A simple Next.js landing page for showcasing Morphy's resume."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

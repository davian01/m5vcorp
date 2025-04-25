import type { Metadata } from "next";
import "./globals.css";
import StickyHeader from "@/components/sticky-header";

export const metadata: Metadata = {
  title: "M5V Corp",
  description: "M5V Corp - Real Estate Investment & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StickyHeader />
        {children}
      </body>
    </html>
  );
}

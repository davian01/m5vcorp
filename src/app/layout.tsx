import type { Metadata, Viewport } from "next";
import "./globals.css";
import StickyHeader from "@/components/sticky-header";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "M5V Corp",
  description: "M5V Corp - Real Estate Investment & Development",
  keywords: "Real Estate, Investment, Development, M5V Corp, Property",
  authors: [{ name: "M5V Corp" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased flex flex-col">
        <StickyHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const inter = Figtree({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OTIS Elevate LATAM",
  description: "Manage installations, KPIs and metrics in a single dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white h-screen">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

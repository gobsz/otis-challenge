import type { Metadata } from "next";
import { Figtree, Space_Grotesk } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { NavBar } from "@/components/nav-bar";
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
    <html lang="en" className="h-screen bg-black">
      <body className={`${inter.className} antialiased`}>
        <HeroUIProvider>
          <NavBar />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}

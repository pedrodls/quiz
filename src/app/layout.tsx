import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AnsAsk App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ` }
      >
        <NextTopLoader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

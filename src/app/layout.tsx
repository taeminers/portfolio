import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Who am I",
  description: "Who is Kyle?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}

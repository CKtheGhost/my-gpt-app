// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define and load custom fonts using Next.js's localFont utility
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  // For variable fonts, don't specify the weight array
  style: "normal",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  // For variable fonts, don't specify the weight array
  style: "normal",
});

// Rest of your metadata configuration remains the same
export const metadata: Metadata = {
  // ... your existing metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

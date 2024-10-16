// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define and load custom fonts using Next.js's localFont utility
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "My GPT App",
  description: "A custom GPT integration built with Next.js and deployed on Vercel.",
  metadataBase: new URL("https://my-gpt-app-ten.vercel.app"),
  authors: [{ name: "CKtheGhost", url: "https://github.com/CKtheGhost" }],
  keywords: [
    "Next.js",
    "Vercel",
    "GPT",
    "OpenAI",
    "AI Chatbot",
    "Serverless",
    "React",
    "Tailwind CSS",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    title: "My GPT App",
    description: "A custom GPT integration built with Next.js and deployed on Vercel.",
    url: "https://my-gpt-app-ten.vercel.app",
    siteName: "My GPT App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My GPT App Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My GPT App",
    description: "A custom GPT integration built with Next.js and deployed on Vercel.",
    images: ["/twitter-image.png"],
  },
};

// RootLayout component to wrap all pages
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

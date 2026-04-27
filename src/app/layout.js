import localFont from "next/font/local";
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

export const metadata = {
title: "Reena Saini | Full Stack Engineer | Frontend Engineer | React, Next.js, TypeScript",
description:
  "Full Stack Engineer and Frontend Engineer with 5+ years of experience building scalable, high-performance web applications. Expertise in React.js, Next.js, TypeScript, Node.js, Python, GraphQL, AWS, performance optimization, CI/CD automation, and AI-driven interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

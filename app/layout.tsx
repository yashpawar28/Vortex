import type { Metadata } from "next";
import {Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
    
  );
}

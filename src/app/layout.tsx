import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bapteme Mayline",
  description: "Bapteme de Mayline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Bapteme Mayline" />
        <meta property="og:description" content="Bapteme de Mayline" />
        <meta property="og:image" content="/Mayline.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bapteme-mayline.vercel.app/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

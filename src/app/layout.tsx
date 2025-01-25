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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://example.com/button-styles.css" />
        <style>
          {`
            :root {
              --font-geist-sans: ${geistSans.variable};
              --font-geist-mono: ${geistMono.variable};
            }
          `}
        </style>
      </head>
      <body className="antialiased">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/info" className="button">Info</a>
              </li>
              <li>
                <a href="/portfolio" className="button">Portfolio</a>
              </li>
              <li>
                <a href="/login" className="button">Login</a>
              </li>
              <li>
                <a href="/board" className="button">Board</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./Footer";
import "./globals.css";
import { Navbar } from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fix Mobile Shop - Riparime dhe Shitje Celularësh dhe Kompjuterësh",
  description:
    "Fix Mobile Shop ofron riparime profesionale dhe shitje të celularëve dhe kompjuterëve me cilësi të lartë dhe shërbim të shkëlqyer për klientët tanë.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

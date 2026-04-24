import type { Metadata } from "next";

import Header from "./components/Header";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const heading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Olympia Mortgage Group",
  description:
    "Niagara's trusted mortgage broker, providing personalized home financing solutions with expert guidance and exceptional service.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${sans.variable}`}>
      <body className="font-sans flex flex-col">
        <Header />
        <main className="flex-1 w-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

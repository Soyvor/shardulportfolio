import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Shardul's Netflix-style Portfolio",
  description: "A developer portfolio built with Next.js and Tailwind CSS, inspired by Netflix UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="font-['Product_Sans'] bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

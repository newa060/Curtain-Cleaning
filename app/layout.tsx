import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://curtaincleaningbrisbane.com.au"),
  title: "Curtain Cleaning Brisbane | On-Site Steam & Ultrasonic Fabric Care",
  description:
    "Gentle, professional on-site curtain steam cleaning in Brisbane. We clean delicate linen, sheer, silk, and heavy velvet curtains directly on your tracks without dismantling. Fast 2-4 hour drying time.",
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  keywords: [
    "Curtain Cleaning Brisbane",
    "On-Site Curtain Cleaning",
    "Curtain Steam Cleaning Brisbane",
    "Sheer Curtain Cleaning",
    "Mould Removal Curtains Brisbane",
    "Curtain Cleaners Near Me",
  ],
  openGraph: {
    title: "Curtain Cleaning Brisbane | Premium On-Site Fabric Care",
    description: "Professional gentle steam sanitisation for delicate hanging curtains across Brisbane.",
    url: "https://curtaincleaningbrisbane.com.au",
    siteName: "Curtain Cleaning Brisbane",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Curtain Cleaning Brisbane Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

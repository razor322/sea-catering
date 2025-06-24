// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEA Catering",
  description: "Custom healthy meals delivered across Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SEA Catering - Catering Sehat dan Fleksibel</title>
        <meta
          name="description"
          content="Nikmati pilihan paket catering sehat dari SEA Catering. Sesuaikan makanan dan jadwal kirim sesuai kebutuhanmu."
        />
        <meta
          name="keywords"
          content="catering sehat, langganan makanan sehat, sea catering, meal plan"
        />
        <meta property="og:title" content="SEA Catering" />
        <meta
          property="og:description"
          content="Paket catering sehat dan praktis untuk mendukung gaya hidupmu. Mulai langganan sekarang!"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://seacatering.id" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

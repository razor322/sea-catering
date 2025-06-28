"use client";

import "./globals.css";
import { Inter } from "next/font/google";
// import { useEffect } from "react";
// import { useUserStore } from "./lib/store/userStore";

const inter = Inter({ subsets: ["latin"] });

//

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const setUser = useUserStore((state) => state.setUser);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await fetch("/api/profile");
  //       if (res.ok) {
  //         const user = await res.json();
  //         setUser(user);
  //       }
  //     } catch (error) {
  //       console.error("Gagal memuat user", error);
  //     }
  //   };

  //   fetchUser();
  // }, [setUser]);

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

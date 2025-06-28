"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

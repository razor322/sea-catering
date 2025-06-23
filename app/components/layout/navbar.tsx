// components/Navbar.tsx

import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-green-600">
          SEA Catering
        </Link>

        <nav className="space-x-4 text-sm">
          <Link href="/menu" className="hover:underline">
            Menu
          </Link>
          <Link href="/subscribe" className="hover:underline">
            Langganan
          </Link>
          <Link href="/contact" className="hover:underline">
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}

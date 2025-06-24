"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/subscription", label: "Subscription" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-green-600">
            SEA Catering
          </Link>

          {/* Navigasi untuk Desktop (tersembunyi di mobile) */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  // Terapkan style berbeda jika link sedang aktif
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Tombol Hamburger untuk Mobile (tersembunyi di desktop) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state saat diklik
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Main menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" /> // Ikon 'X' jika menu terbuka
              ) : (
                <Bars3Icon className="block h-6 w-6" /> // Ikon 'hamburger' jika menu tertutup
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Panel Menu Mobile */}
      {/* Tampil hanya jika isMenuOpen bernilai true */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

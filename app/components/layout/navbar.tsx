"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { useUserStore } from "@/app/lib/store/userStore";
import { useHydrateUser } from "@/app/lib/hooks/useHydrateUser";

// const navLinks = [
//   { href: "/menu", label: "Menu" },
//   { href: "/subscription", label: "Subscription" },
//   { href: "/contact", label: "Contact Us" },
//   { href: "/dashboard", label: "Dashboard" },
// ];

export function Navbar() {
  useHydrateUser();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const userName = useUserStore((state) => state.user);
  const role = useUserStore((state) => state.user?.role);

  const navLinks = useMemo(() => {
    return [
      { href: "/menu", label: "Menu" },
      { href: "/subscription", label: "Subscription" },
      { href: "/contact", label: "Contact Us" },
      {
        href: role === "ADMIN" ? "/admin" : "/dashboard",
        label: "Dashboard",
      },
    ];
  }, [role]);
  // useEffect(() => {
  //   async function fetchUser() {
  //     try {
  //       const res = await axios.get("/api/profile");
  //       setUser(res.data);
  //     } catch (err) {
  //       if (axios.isAxiosError(err) && err.response?.status === 401) {
  //         // User belum login
  //         console.warn("User belum login");
  //         setUser(null);
  //       } else {
  //         console.error("Failed to fetch user:", err);
  //         setUser(null);
  //       }
  //     }
  //   }
  //   fetchUser();
  // }, []);

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    setIsModalOpen(false);
    router.refresh();
    window.location.reload();
  };
  return (
    <>
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

              {userName ? (
                <>
                  <span className="text-sm text-gray-700">
                    Hi, {userName.name}
                  </span>
                  <Button
                    className=" bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    asChild
                    className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white ml-4"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    asChild
                    className="hidden md:inline-block bg-gray-100 hover:bg-gray-200 text-gray-900"
                  >
                    <Link href="/register">Register</Link>
                  </Button>
                </>
              )}
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

              {/* Tambahkan Login dan Register Button di Mobile */}
              <div className="px-3 pt-3 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center rounded-md bg-green-600 text-white py-2 font-semibold hover:bg-green-700"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center rounded-md bg-gray-100 text-gray-900 py-2 font-semibold hover:bg-gray-200"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={true}>
          <DialogContent className="max-w-sm sm:rounded-lg">
            <DialogHeader>
              <DialogTitle>Yakin ingin logout?</DialogTitle>
            </DialogHeader>
            <DialogFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Batal
              </Button>
              <Button
                className="bg-red-600 text-white hover:bg-red-700"
                onClick={handleLogout}
              >
                Ya, Logout
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

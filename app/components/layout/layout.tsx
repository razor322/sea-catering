// components/Layout.tsx

import { ReactNode } from "react";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-2 text-center">
          Create an account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your details to get started
        </p>

        <div className="space-y-4">
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign Up</Button>
        </div>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

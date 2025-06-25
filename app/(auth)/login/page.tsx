"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-2 text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your email below to login to your account
        </p>

        <div className="space-y-4">
          <Input type="email" placeholder="m@example.com" />
          <Input type="password" placeholder="••••••••" />
          <Button className="w-full">Login</Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>

        <div className="flex justify-between items-center text-sm mt-4">
          <Link href="/register" className="text-green-600 hover:underline">
            Sign Up
          </Link>
          <Link href="#" className="text-gray-500 hover:underline">
            Forgot your password?
          </Link>
        </div>
      </div>
    </main>
  );
}

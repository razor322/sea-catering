"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axios.post("/api/auth/login", { email, password });
      router.push("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Gagal login");
      } else {
        setError("Terjadi kesalahan yang tidak diketahui");
      }
    }
  }
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
        >
          <h2 className="text-xl font-bold mb-2 text-center ">
            Login to your account
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6 ">
            Enter your email below to login to your account
          </p>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700/90"
            >
              Login
            </Button>
          </div>
        </form>
        <div className="flex justify-between items-center text-sm mt-4">
          <Link href="/register" className="text-green-600 hover:underline">
            Sign Up
          </Link>
          <Link href="#" className="text-gray-500 hover:underline ">
            Forgot your password?
          </Link>
        </div>
      </div>
    </main>
  );
}

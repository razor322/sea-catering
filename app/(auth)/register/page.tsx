"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      console.log({ name, email, password });
      await axios.post("/api/auth/register", { name, email, password });
      router.push("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const data = err.response?.data?.error;

        if (typeof data === "object") {
          const messages = Object.values(data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((field: any) => field?._errors?.[0])
            .filter(Boolean);

          setError(messages.join(", ") || "Validasi gagal");
        } else {
          setError(data || "Gagal registrasi. Coba lagi nanti.");
        }
      } else {
        setError("Terjadi kesalahan yang tidak diketahui");
      }
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-2 text-center">
          Create an account
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your details to get started
        </p>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Sign Up
          </Button>
        </div>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

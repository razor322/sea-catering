import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// const prisma = new PrismaClient();
const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "Harus ada huruf besar")
    .regex(/[a-z]/, "Harus ada huruf kecil")
    .regex(/[0-9]/, "Harus ada angka")
    .regex(/[^a-zA-Z0-9]/, "Harus ada karakter khusus"),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const result = registerSchema.safeParse(body);
  console.log("Data dari frontend:", body);

  if (!result.success) {
    return NextResponse.json({ error: result.error.format() }, { status: 400 });
  }

  const { name, email, password } = result.data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { error: "Email sudah digunakan" },
      { status: 400 }
    );
  }

  const hashed = await hash(password, 10);
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
      role: "USER",
    },
  });

  return NextResponse.json({ message: "Registrasi berhasil" });
}

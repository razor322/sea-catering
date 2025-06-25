import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json(
      { error: "Email tidak ditemukan" },
      { status: 404 }
    );
  }

  const isValid = await compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  const token = sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
    path: "/",
  });

  return NextResponse.json({
    token,
    user: { id: user.id, name: user.name, role: user.role },
  });
}

// import { compare } from "bcryptjs";

// import { sign } from "jsonwebtoken";
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function POST(req: NextRequest) {
//   const { email, password } = await req.json();

//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     return NextResponse.json(
//       { error: "Email tidak ditemukan" },
//       { status: 404 }
//     );
//   }

//   const isValid = await compare(password, user.password);
//   if (!isValid) {
//     return NextResponse.json({ error: "Password salah" }, { status: 401 });
//   }
//   const jwtSecret = process.env.JWT_SECRET;
//   if (!jwtSecret) {
//     throw new Error("JWT_SECRET is not defined in .env");
//   }
//   const token = sign(
//     { userId: user.id, role: user.role },
//     process.env.JWT_SECRET!,
//     { expiresIn: "7d" }
//   );
//   const res = NextResponse.json({
//     token,
//     user: { id: user.id, name: user.name, role: user.role },
//   });

//   res.cookies.set("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     maxAge: 60 * 60 * 24 * 7,
//     path: "/",
//   });

//   return res;

//   // return NextResponse.json({
//   //   token,
//   //   user: { id: user.id, name: user.name, role: user.role },
//   // });
// }
import { compare } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/app/lib/auth/signToken";

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

  const token = await signToken({
    userId: user.id,
    role: user.role.toUpperCase(),
  });

  const res = NextResponse.json({
    token,
    user: { id: user.id, name: user.name, role: user.role },
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return res;
}

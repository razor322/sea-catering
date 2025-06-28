// import { NextRequest, NextResponse } from "next/server";
// import { verify } from "jsonwebtoken";
// import { prisma } from "@/lib/prisma";

// export async function GET(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   try {
//     const decoded = verify(token, process.env.JWT_SECRET!) as {
//       userId: string;
//     };
//     const user = await prisma.user.findUnique({
//       where: { id: decoded.userId },
//       select: { id: true, name: true, email: true },
//     });

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json(user);
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = verify(token, process.env.JWT_SECRET!);
    const user = await prisma.user.findUnique({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: { id: (payload as any).userId },
      select: { id: true, name: true, email: true, role: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error("Error verifying token:", err);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

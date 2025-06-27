import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/app/lib/auth/verifyToken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { valid, payload } = await verifyToken(token || "");

  if (!valid || !payload) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscriptions = await prisma.subscription.findMany({
    where: { userId: payload.userId },
  });

  return NextResponse.json(subscriptions);
}
// export async function GET(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;
//   const { valid, payload } = await verifyToken(token || "");

//   if (!valid || !payload?.userId) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const user = await prisma.user.findUnique({
//     where: { id: payload.userId },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       subscriptions: true,
//     },
//   });

//   return NextResponse.json(user);
// }

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { valid, payload } = await verifyToken(token || "");

  if (!valid || !payload) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const subscription = await prisma.subscription.create({
    data: {
      ...body,
      userId: payload.userId,
    },
  });
  console.log("New subscription created:", subscription);
  return NextResponse.json(subscription);
}

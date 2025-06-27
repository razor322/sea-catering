// app/api/subscription/pause/route.ts
import { verifyToken } from "@/app/lib/auth/verifyToken";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import { parse } from "url";
export async function PUT(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { valid, payload } = await verifyToken(token || "");

  if (!valid || !payload) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();

  const subscription = await prisma.subscription.update({
    where: { id, userId: payload.userId },
    data: { status: "PAUSED" },
  });

  return NextResponse.json(subscription);
}

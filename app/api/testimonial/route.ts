import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, location, plan, rating, experience } = body;

    if (!name || !location || !plan || !rating || !experience) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        location,
        plan,
        rating,
        experience,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
      take: 10, // ambil maksimal 10 terbaru
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Gagal memuat data" }, { status: 500 });
  }
}

"use client";

import TestimonialCarousel from "../../shared/testimonial/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import AvatarSection from "../../shared/AvatarSection";
import { TestimonialForm } from "../../shared/testimonial/TestimonialCard";
import { Testimonial } from "@prisma/client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Fetch awal
  useEffect(() => {
    axios.get("/api/testimonial").then((res) => {
      setTestimonials(res.data);
    });
  }, []);

  // Tambahkan testimonial baru ke array
  const addTestimonial = (newItem: Testimonial) => {
    setTestimonials((prev) => [newItem, ...prev]);
  };
  return (
    <section className="pt-6 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Apa Kata Mereka?</h2>
        <p className="text-gray-600">
          Pelanggan kami puas dengan pengalaman makan sehat dari SEA Catering.
        </p>
      </div>
      <TestimonialCarousel testimonials={testimonials} />
      <AvatarSection />
      <div className="my-5  ">
        {/* <TestimonialForm /> */}
        <TestimonialForm onSubmitSuccess={addTestimonial} />
      </div>
      <section className="py-12 bg-green-100 text-center rounded-2xl">
        <h2 className="text-2xl font-bold mb-2">Siap Hidup Lebih Sehat?</h2>
        <p className="text-gray-700 mb-4">
          Pilih paket favoritmu dan mulai berlangganan sekarang!
        </p>
        <Link href="/subscription">
          <Button className="bg-green-600 hover:bg-green-700/90">
            Mulai Langganan
          </Button>
        </Link>
      </section>
    </section>
  );
}

import TestimonialForm from "../../shared/testimonial/TestimonialForm";
import TestimonialCarousel from "../../shared/testimonial/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import AvatarSection from "../../shared/AvatarSection";

export default function TestimonialsSection() {
  return (
    <section className="pt-6 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Apa Kata Mereka?</h2>
        <p className="text-gray-600">
          Pelanggan kami puas dengan pengalaman makan sehat dari SEA Catering.
        </p>
      </div>
      <TestimonialCarousel />
      <AvatarSection />
      <div className="mt-5 border-t ">
        <TestimonialForm />
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

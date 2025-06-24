import { Button } from "@/components/ui/button";
import { Sparkles, CalendarDays, Heart } from "lucide-react";
import Link from "next/link";

export default function SubscriptionPromoSection() {
  return (
    <section className="mt-6 bg-gradient-to-br from-yellow-50 to-white py-12 rounded-2xl">
      <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800">
          🌟 Langganan Makanan Praktis & Sehat
        </h2>
        <p className="text-gray-600 text-lg">
          SEA Catering kini menyediakan sistem langganan makanan otomatis! Tak
          perlu repot pesan harian, kamu bisa atur sendiri plan, jadwal
          pengiriman, dan jenis makanan sesuai kebutuhanmu.
        </p>

        <div className="flex justify-center gap-4 flex-wrap text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            Praktis & Hemat Waktu
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-blue-500" />
            Jadwal Fleksibel
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500" />
            Sesuai Preferensi Kamu
          </div>
        </div>

        <Link href="/subscription">
          <Button className="mt-4 px-6 py-3 text-lg">
            Coba Langganan Sekarang
          </Button>
        </Link>
      </div>
    </section>
  );
}

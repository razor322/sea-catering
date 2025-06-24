"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Hubungi Kami</h2>
        <p className="text-gray-600">
          Punya pertanyaan atau masukan? Kami siap membantu kamu.
        </p>
        <p className="text-gray-600 mb-2">
          Untuk pertanyaan atau kerja sama, hubungi manajer kami
        </p>
        <p className="text-gray-800 font-semibold">Brian – 08123456789</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto space-y-4"
      >
        <Input placeholder="Nama" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Pesan kamu..." rows={5} />
        <div className="text-right">
          <Button>Kirim Pesan</Button>
        </div>
      </motion.form>
      <section className="mt-12 py-12 bg-green-100 text-center rounded-2xl">
        <h2 className="text-2xl font-bold mb-2">Siap Hidup Lebih Sehat?</h2>
        <p className="text-gray-700 mb-4">
          Pilih paket favoritmu dan mulai berlangganan sekarang!
        </p>
        <Button>Mulai Langganan</Button>
      </section>
    </section>
  );
}

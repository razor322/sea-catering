"use client";

import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";
import { Assets } from "@/app/constants/asset_const";
import Image from "next/image";
// Schema validasi
const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 huruf").max(30),
  message: z.string().min(5, "Pesan minimal 5 karakter"),
  rating: z
    .number({ invalid_type_error: "Rating harus berupa angka" })
    .min(1)
    .max(5),
});

export default function TestimonialForm() {
  const [form, setForm] = useState({ name: "", message: "", rating: 5 });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    toast.success("Testimoni berhasil dikirim!", {
      description: "Terima kasih atas ulasanmu 🙏",
      icon: <CheckCircle className="text-green-500" />,
      duration: 3000,
    });

    const escaped = {
      name: escapeHtml(form.name),
      message: escapeHtml(form.message),
      rating: form.rating,
    };

    console.log("✅ Testimoni aman:", escaped);

    setForm({ name: "", message: "", rating: 5 });
    setErrors({});
  };

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src={Assets.images.feedback}
                alt="Testimonial"
                width={300}
                height={300}
              />

              <h3 className="text-xl font-semibold">Bagikan Pengalamanmu</h3>
              <p className="text-sm text-gray-500">
                Kami sangat menghargai masukan dari kamu!
              </p>
            </div>
          </div>

          {/* KANAN: Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Tulis Testimoni Kamu
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                name="name"
                placeholder="Nama Kamu"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}

              <Textarea
                name="message"
                placeholder="Pesan"
                value={form.message}
                onChange={handleChange}
                rows={4}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}

              <Input
                name="rating"
                type="number"
                value={form.rating}
                onChange={handleChange}
                min={1}
                max={5}
              />
              {errors.rating && (
                <p className="text-sm text-red-500">{errors.rating}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700/90"
              >
                Kirim Testimoni
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Basic HTML escaper
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

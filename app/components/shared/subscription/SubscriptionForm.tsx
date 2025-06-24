"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";
import {
  calculateTotalPrice,
  formatRupiah,
  PlanType,
} from "../../../lib/subscription/calculate";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 huruf"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  plan: z.enum(["diet", "protein", "royal"]),
  meals: z
    .array(z.enum(["breakfast", "lunch", "dinner"]))
    .min(1, "Pilih minimal 1 jenis makanan"),
  days: z.array(z.string()).min(1, "Pilih minimal 1 hari pengiriman"),
  allergies: z.string().optional(),
});

const PLAN_PRICES: Record<string, number> = {
  diet: 30000,
  protein: 40000,
  royal: 60000,
};

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function SubscriptionForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "diet",
    meals: [] as string[],
    days: [] as string[],
    allergies: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setForm((prev) => {
      const values = prev[name as "meals" | "days"];
      const updated = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];
      return { ...prev, [name]: updated };
    });
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

    const total = calculateTotalPrice({
      plan: form.plan as PlanType,
      mealTypes: form.meals,
      deliveryDays: form.days,
    });

    const displayPrice = formatRupiah(total);

    toast.success("Berhasil mendaftar langganan!", {
      description: `Total harga: ${displayPrice}`,
      icon: <CheckCircle className="text-green-500" />,
    });

    setForm({
      name: "",
      phone: "",
      plan: "diet",
      meals: [],
      days: [],
      allergies: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="Nama Lengkap"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <Input
        name="phone"
        placeholder="Nomor Telepon Aktif"
        value={form.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <div className="space-y-2">
        <p className="font-semibold">Pilih Plan:</p>
        <div className="flex gap-4">
          {Object.keys(PLAN_PRICES).map((plan) => (
            <label key={plan} className="flex items-center gap-2">
              <input
                type="radio"
                name="plan"
                value={plan}
                checked={form.plan === plan}
                onChange={handleChange}
              />
              {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan (Rp
              {PLAN_PRICES[plan].toLocaleString("id-ID")}/meal)
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">Pilih Jenis Makanan:</p>
        <div className="flex gap-4 flex-wrap">
          {["breakfast", "lunch", "dinner"].map((meal) => (
            <label key={meal} className="flex items-center gap-2">
              <Checkbox
                checked={form.meals.includes(meal)}
                onCheckedChange={() => handleCheckboxChange("meals", meal)}
              />
              {meal.charAt(0).toUpperCase() + meal.slice(1)}
            </label>
          ))}
        </div>
        {errors.meals && <p className="text-red-500 text-sm">{errors.meals}</p>}
      </div>

      <div>
        <p className="font-semibold">Pilih Hari Pengiriman:</p>
        <div className="flex gap-4 flex-wrap">
          {DAYS.map((day) => (
            <label key={day} className="flex items-center gap-2">
              <Checkbox
                checked={form.days.includes(day)}
                onCheckedChange={() => handleCheckboxChange("days", day)}
              />
              {day}
            </label>
          ))}
        </div>
        {errors.days && <p className="text-red-500 text-sm">{errors.days}</p>}
      </div>

      <Textarea
        name="allergies"
        placeholder="Alergi atau pantangan makanan (opsional)"
        value={form.allergies}
        onChange={handleChange}
      />

      <Button type="submit" className="w-full">
        Daftar Langganan
      </Button>
    </form>
  );
}

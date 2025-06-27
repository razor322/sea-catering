"use client";

import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  calculateTotalPrice,
  formatRupiah,
  PlanType,
} from "../../../lib/subscription/calculate";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 huruf"),
  phone: z
    .string()
    .min(10, "Nomor telepon tidak valid")
    .regex(/^\d+$/, "Nomor telepon harus berupa angka"),
  allergies: z.string().optional(),
  meals: z.array(z.string()).min(1, "Pilih minimal satu jenis makanan"),
  days: z.array(z.string()).min(1, "Pilih minimal satu hari pengiriman"),
});

interface Props {
  open: boolean;
  onClose: () => void;
  selectedPlan: PlanType;
}

const MEAL_OPTIONS = ["breakfast", "lunch", "dinner"];
const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const PLAN_PRICES: Record<PlanType, number> = {
  "Diet Plan": 30000,
  "Protein Plan": 40000,
  "Royal Plan": 60000,
};

export default function SubscriptionConfirmModal({
  open,
  onClose,
  selectedPlan,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "",
    meals: [] as string[],
    days: [] as string[],
    allergies: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCheckbox = (field: "meals" | "days", value: string) => {
    setForm((prev) => {
      const current = prev[field];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };
  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      plan: "",
      meals: [],
      days: [],
      allergies: "",
    });
    setErrors({});
  };

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const handleSubmit = async () => {
    const result = schema.safeParse(form);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    const sanitizedForm = {
      name: escapeHtml(form.name),
      phone: escapeHtml(form.phone),
      allergies: escapeHtml(form.allergies || ""),
      plan: selectedPlan,
      meals: form.meals,
      days: form.days,
      total: totalPrice,
    };

    try {
      const res = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedForm),
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error("Gagal membuat langganan", {
          description: data?.error || "Terjadi kesalahan",
        });
        return;
      } else {
        toast.success("Langganan berhasil dibuat!");
      }
    } catch (error) {
      console.error("Error submitting subscription:", error);
      toast.error("Gagal mengirim langganan", {
        description: "Terjadi kesalahan, silakan coba lagi",
      });
      return;
    }
    console.log("Submit Subscription", { ...sanitizedForm, selectedPlan });
    toast.success("Langganan berhasil dikirim!", {
      description: "Terima kasih telah berlangganan 🙌",
      icon: <CheckCircle className="text-green-500" />,
      duration: 3000,
    });
    resetForm();
    onClose();
  };

  const totalPrice = useMemo(() => {
    return calculateTotalPrice({
      plan: selectedPlan,
      mealTypes: form.meals,
      deliveryDays: form.days,
    });
  }, [selectedPlan, form.meals, form.days]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Pilih Paket Langganan
          </DialogTitle>
          <p className="text-center text-sm text-gray-500 mt-1">
            Plan yang dipilih:{" "}
            <strong>
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
            </strong>
          </p>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-1">Kontak Anda:</p>
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Nama Lengkap"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
              <Input
                name="phone"
                placeholder="Nomor Telepon"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
              <Textarea
                name="allergies"
                placeholder="Alergi (opsional)\n(e.g., seafood, kacang-kacangan)"
                value={form.allergies}
                onChange={(e) =>
                  setForm({ ...form, allergies: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">Pilihan Makanan:</p>
            <div className="flex gap-4 flex-wrap">
              {MEAL_OPTIONS.map((meal) => (
                <label key={meal} className="flex items-center gap-2">
                  <Checkbox
                    checked={form.meals.includes(meal)}
                    onCheckedChange={() => {
                      handleCheckbox("meals", meal);
                      if (errors.meals) setErrors({ ...errors, meals: "" });
                    }}
                  />
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </label>
              ))}
            </div>
            {errors.meals && (
              <p className="text-sm text-red-500">{errors.meals}</p>
            )}
          </div>

          <div>
            <p className="font-semibold mb-1">Hari Pengiriman:</p>
            <div className="grid grid-cols-3 gap-2">
              {DAYS.map((day) => (
                <label key={day} className="flex items-center gap-2">
                  <Checkbox
                    checked={form.days.includes(day)}
                    onCheckedChange={() => {
                      handleCheckbox("days", day);
                      if (errors.days) setErrors({ ...errors, days: "" });
                    }}
                  />
                  {day}
                </label>
              ))}
            </div>
            {errors.days && (
              <p className="text-sm text-red-500">{errors.days}</p>
            )}
          </div>

          <div className="bg-gray-100 p-3 rounded border">
            <p className="text-sm font-semibold">
              Total Harga:{" "}
              {formatRupiah(totalPrice || PLAN_PRICES[selectedPlan])}
            </p>
            <p className="text-xs text-gray-500">
              (Harga dihitung berdasarkan plan, jenis makanan, dan hari kirim)
            </p>
          </div>

          <DialogFooter className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => {
                resetForm();
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700/90"
              onClick={handleSubmit}
            >
              Kirim
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

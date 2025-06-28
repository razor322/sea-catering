// components/subscription/SubscriptionPlans.tsx
"use client";

import { useState } from "react";
import { BadgeCheck, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

import { PLANS } from "@/app/constants/string_const";
import { PlanType } from "@/app/lib/subscription/calculate";
import { JSX } from "react/jsx-runtime";
import SubscriptionConfirmModal from "../../shared/subscription/SubscriptionConfirmModal";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/lib/store/userStore";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  const handleSelect = (plan: PlanType) => {
    if (!user) {
      toast.warning("Silakan login terlebih dahulu untuk memilih paket", {
        duration: 2000,
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
      return;
    }

    setSelectedPlan(plan);
    setOpenModal(true);
  };
  const ICONS: Record<string, JSX.Element> = {
    diet: <BadgeCheck className="text-green-500 w-6 h-6" />,
    protein: <Utensils className="text-blue-500 w-6 h-6" />,
    royal: <Star className="text-yellow-500 w-6 h-6" />,
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Pilih Paket Langganan yang Cocok Untukmu
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Semua pengguna SEA Catering dapat menikmati layanan pemesanan
            praktis dan sehat. Berlangganan kapan saja dan hentikan kapan pun
            kamu mau. Dengan memilih paket langganan, kamu menyetujui syarat &
            ketentuan layanan kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="border rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {ICONS[plan.key]}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.key === "protein" && (
                    <span className="ml-auto text-xs text-white bg-blue-500 px-2 py-1 rounded-full">
                      Best Plan
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                <p className="text-lg font-bold">
                  Rp{plan.price.toLocaleString("id-ID")}/meal
                </p>
              </div>
              <Button
                className="mt-4 w-full bg-green-600 hover:bg-green-700/90"
                onClick={() => handleSelect(plan.name as PlanType)}
              >
                Pilih Plan
              </Button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <SubscriptionConfirmModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedPlan={selectedPlan}
        />
      )}
    </section>
  );
}

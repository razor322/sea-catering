// components/sections/MenuSection.tsx

"use client";

import { useState } from "react";

import { MENU } from "@/app/constants/string_const";

import MenuModal from "../../shared/menu/MenuModal";
import MenuCard from "../../shared/menu/MenuCard";

export default function MenuSection() {
  const [selectedPlan, setSelectedMenu] = useState<null | (typeof MENU)[0]>(
    null
  );

  return (
    <section className="pt-6 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Pilih Paket Makananmu
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {MENU.map((plan) => (
          <MenuCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            image={plan.image}
            onSeeMore={() => setSelectedMenu(plan)}
          />
        ))}
      </div>

      {selectedPlan && (
        <MenuModal
          open={!!selectedPlan}
          onOpenChange={() => setSelectedMenu(null)}
          name={selectedPlan.name}
          details={selectedPlan.details}
        />
      )}
    </section>
  );
}

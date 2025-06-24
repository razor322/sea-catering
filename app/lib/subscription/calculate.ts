export type PlanType = "Diet Plan" | "Protein Plan" | "Royal Plan";

const PLAN_PRICES: Record<PlanType, number> = {
  "Diet Plan": 30000,
  "Protein Plan": 40000,
  "Royal Plan": 60000,
};

/**
 * Hitung total harga berdasarkan input user
 *
 * @param plan Plan yang dipilih: diet, protein, royal
 * @param mealTypes Array meal: ["breakfast", "dinner", ...]
 * @param deliveryDays Array hari: ["monday", "tuesday", ...]
 * @returns total harga dalam angka
 */
export function calculateTotalPrice({
  plan,
  mealTypes,
  deliveryDays,
}: {
  plan: PlanType;
  mealTypes: string[];
  deliveryDays: string[];
}): number {
  const pricePerMeal = PLAN_PRICES[plan];
  const mealCount = mealTypes.length;
  const dayCount = deliveryDays.length;

  const total = pricePerMeal * mealCount * dayCount * 4.3;
  return total;
}

/**
 * Format ke dalam Rupiah
 * @param number Angka harga
 */
export function formatRupiah(number: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

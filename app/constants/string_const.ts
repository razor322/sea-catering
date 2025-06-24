import { Assets } from "./asset_const";

export const MENU = [
  {
    id: 1,
    name: "Breakfast Plan",
    price: "Rp150.000 / minggu",
    description: "Cocok untuk pemula yang ingin mulai makan sehat.",
    details: "Termasuk 5 makanan siang dan malam. Kalori terkontrol.",
    image: Assets.images.healthyBasic,
  },
  {
    id: 2,
    name: "Lunch Plan",
    price: "Rp250.000 / minggu",
    description: "Ideal untuk yang sedang diet dan defisit kalori.",
    details: "Makanan rendah karbohidrat dan tinggi protein.",
    image: Assets.images.weightLoss,
  },
  {
    id: 3,
    name: "Dinner Plan",
    price: "Rp280.000 / minggu",
    description: "Untuk kamu yang sedang bulking atau butuh protein tinggi.",
    details:
      "Termasuk menu tinggi kalori dan protein untuk mendukung pembentukan otot.",
    image: Assets.images.muscleGain,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ayu",
    message: "Makanannya enak dan sehat. Cocok buat diet!",
    rating: 5,
  },
  {
    name: "Rizky",
    message: "Pengiriman cepat dan bisa pilih menu sendiri. Keren!",
    rating: 4,
  },
  {
    name: "Dina",
    message: "Sangat membantu untuk meal plan mingguan saya.",
    rating: 5,
  },
  {
    name: "Bayu",
    message: "Banyak pilihan menu, cocok buat yang sibuk kerja.",
    rating: 4,
  },
  {
    name: "Salsa",
    message: "Porsinya pas, rasanya juga enak banget!",
    rating: 5,
  },
  {
    name: "Indra",
    message: "Suka banget karena bisa request tanpa cabai 🌶️",
    rating: 4,
  },
  {
    name: "Mega",
    message: "Packaging rapi, sampai tepat waktu. Recommended!",
    rating: 5,
  },
];
export const PLANS = [
  {
    name: "Diet Plan",
    key: "diet",
    price: 30000,
    description: "Rendah kalori dan seimbang, cocok untuk program diet sehat.",
  },
  {
    name: "Protein Plan",
    key: "protein",
    price: 40000,
    description: "Kaya protein untuk kebutuhan harian dan kebugaran tubuh.",
  },
  {
    name: "Royal Plan",
    key: "royal",
    price: 60000,
    description:
      "Bahan premium dan variasi lengkap untuk pengalaman makan terbaik.",
  },
];

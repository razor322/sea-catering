import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

console.log("Seeding database...");

async function main() {
  // 1.  user dengan 3 subscription
  const userPassword = await bcrypt.hash("Nana@1234", 10);
  const nana = await prisma.user.create({
    data: {
      name: "Nana",
      email: "nana@example.com",
      password: userPassword,
      role: "USER",
    },
  });

  // 2. Subscription dengan status berbeda
  await prisma.subscription.createMany({
    data: [
      {
        userId: nana.id,
        plan: "Protein Plan",
        meals: ["lunch"],
        days: ["Monday", "Wednesday"],
        phone: "081234567890",
        name: "Langganan Aktif",
        total: 300000,
        status: "ACTIVE",
      },
      {
        userId: nana.id,
        plan: "Diet Plan",
        meals: ["dinner"],
        days: ["Tuesday", "Thursday"],
        phone: "081234567891",
        name: "Langganan Dijeda",
        total: 250000,
        status: "PAUSED",
      },
      {
        userId: nana.id,
        plan: "Royal Plan",
        meals: ["breakfast"],
        days: ["Friday"],
        phone: "081234567892",
        name: "Langganan Dibatalkan",
        total: 400000,
        status: "CANCELLED",
      },
    ],
  });

  // 3.  admin user
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@example.com",
      password: await bcrypt.hash("Admin@123", 10),
      role: "ADMIN",
    },
  });

  // 4. Testimonial dummy
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Nana",
        location: "Jakarta",
        plan: "Protein Plan",
        rating: 5,
        experience: "Langganan aktif sangat membantu dietku!",
      },
      {
        name: "Rindu",
        location: "Bandung",
        plan: "Diet Plan",
        rating: 4,
        experience: "Sempat jeda tapi makanannya tetap top.",
      },
      {
        name: "Dana",
        location: "Padang",
        plan: "Royal Plan",
        rating: 3,
        experience: "Sayang dibatalkan, tapi pelayanannya bagus.",
      },
    ],
  });

  console.log("✅ Seeding selesai");
}

main()
  .catch((e) => {
    console.error("❌ Error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

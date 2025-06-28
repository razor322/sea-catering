/*
  Warnings:

  - You are about to drop the column `message` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Testimonial` table. All the data in the column will be lost.
  - Added the required column `experience` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Testimonial" DROP CONSTRAINT "Testimonial_userId_fkey";

-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "message",
DROP COLUMN "userId",
ADD COLUMN     "experience" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "plan" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;

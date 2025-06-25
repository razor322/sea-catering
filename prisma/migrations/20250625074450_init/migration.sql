/*
  Warnings:

  - You are about to drop the column `name` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Testimonial` table. All the data in the column will be lost.
  - Added the required column `total` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'PAUSED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "total" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "content",
DROP COLUMN "name",
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cat" DROP CONSTRAINT "Cat_ownerId_fkey";

-- DropIndex
DROP INDEX "Cat.ownerId_unique";

-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "ownerId";

-- DropTable
DROP TABLE "Profile";

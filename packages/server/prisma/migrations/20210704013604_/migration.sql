/*
  Warnings:

  - You are about to drop the column `postalCode` on the `Cat` table. All the data in the column will be lost.
  - Added the required column `city` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "postalCode",
ADD COLUMN     "city" VARCHAR(30) NOT NULL;

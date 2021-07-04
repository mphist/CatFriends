/*
  Warnings:

  - Added the required column `country` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "country" VARCHAR(30) NOT NULL;

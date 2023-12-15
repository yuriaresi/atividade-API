/*
  Warnings:

  - The primary key for the `Loja` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Loja" DROP CONSTRAINT "Loja_pkey",
ALTER COLUMN "cnpj" SET DATA TYPE VARCHAR(50),
ADD CONSTRAINT "Loja_pkey" PRIMARY KEY ("cnpj");

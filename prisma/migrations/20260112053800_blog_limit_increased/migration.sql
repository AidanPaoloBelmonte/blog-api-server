/*
  Warnings:

  - You are about to alter the column `comment` on the `Comments` table. The data in that column could be lost. The data in that column will be cast from `VarChar(512)` to `VarChar(511)`.

*/
-- AlterTable
ALTER TABLE "Blogposts" ALTER COLUMN "post" SET DATA TYPE VARCHAR(2047);

-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "comment" SET DATA TYPE VARCHAR(511);

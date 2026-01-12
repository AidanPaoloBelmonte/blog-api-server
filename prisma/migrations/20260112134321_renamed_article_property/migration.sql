/*
  Warnings:

  - You are about to drop the column `article` on the `BlogArticle` table. All the data in the column will be lost.
  - Added the required column `content` to the `BlogArticle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogArticle" DROP COLUMN "article",
ADD COLUMN     "content" VARCHAR(2047) NOT NULL;

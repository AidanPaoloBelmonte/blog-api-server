/*
  Warnings:

  - You are about to drop the column `post` on the `Blogpost` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[articleID]` on the table `Blogpost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `articleID` to the `Blogpost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogpost" DROP COLUMN "post",
ADD COLUMN     "articleID" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "BlogArticle" (
    "id" SERIAL NOT NULL,
    "article" VARCHAR(2047) NOT NULL,

    CONSTRAINT "BlogArticle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blogpost_articleID_key" ON "Blogpost"("articleID");

-- AddForeignKey
ALTER TABLE "Blogpost" ADD CONSTRAINT "Blogpost_articleID_fkey" FOREIGN KEY ("articleID") REFERENCES "BlogArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `articleID` on the `Blogpost` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[blogpostId]` on the table `BlogArticle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blogpostId` to the `BlogArticle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Blogpost" DROP CONSTRAINT "Blogpost_articleID_fkey";

-- DropIndex
DROP INDEX "Blogpost_articleID_key";

-- AlterTable
ALTER TABLE "BlogArticle" ADD COLUMN     "blogpostId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Blogpost" DROP COLUMN "articleID";

-- CreateIndex
CREATE UNIQUE INDEX "BlogArticle_blogpostId_key" ON "BlogArticle"("blogpostId");

-- AddForeignKey
ALTER TABLE "BlogArticle" ADD CONSTRAINT "BlogArticle_blogpostId_fkey" FOREIGN KEY ("blogpostId") REFERENCES "Blogpost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

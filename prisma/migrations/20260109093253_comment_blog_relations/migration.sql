/*
  Warnings:

  - Added the required column `blogID` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "blogID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_blogID_fkey" FOREIGN KEY ("blogID") REFERENCES "Blogposts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

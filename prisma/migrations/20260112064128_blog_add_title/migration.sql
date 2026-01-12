/*
  Warnings:

  - Added the required column `title` to the `Blogposts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogposts" ADD COLUMN     "title" VARCHAR(255) NOT NULL;

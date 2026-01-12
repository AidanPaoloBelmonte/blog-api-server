-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_authorID_fkey";

-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "authorID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

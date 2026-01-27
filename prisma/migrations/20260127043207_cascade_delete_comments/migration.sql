-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorID_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_blogID_fkey";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blogID_fkey" FOREIGN KEY ("blogID") REFERENCES "Blogpost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "BlogArticle" DROP CONSTRAINT "BlogArticle_blogpostId_fkey";

-- AddForeignKey
ALTER TABLE "BlogArticle" ADD CONSTRAINT "BlogArticle_blogpostId_fkey" FOREIGN KEY ("blogpostId") REFERENCES "Blogpost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

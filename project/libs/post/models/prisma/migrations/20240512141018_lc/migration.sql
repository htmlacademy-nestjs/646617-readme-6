/*
  Warnings:

  - Added the required column `comments` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commentsQty` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likesQty` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "comments" INTEGER NOT NULL,
ADD COLUMN     "commentsQty" INTEGER NOT NULL,
ADD COLUMN     "likes" INTEGER NOT NULL,
ADD COLUMN     "likesQty" INTEGER NOT NULL;

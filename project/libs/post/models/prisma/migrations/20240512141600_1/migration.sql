/*
  Warnings:

  - You are about to drop the column `comments` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "comments",
DROP COLUMN "likes";

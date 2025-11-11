/*
  Warnings:

  - You are about to drop the `GuideDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GuideDetail" DROP CONSTRAINT "GuideDetail_guideId_fkey";

-- DropTable
DROP TABLE "GuideDetail";

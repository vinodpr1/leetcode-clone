-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "college" TEXT DEFAULT '',
ADD COLUMN     "location" TEXT DEFAULT '',
ADD COLUMN     "no_of_solved_questions" INTEGER DEFAULT 0,
ADD COLUMN     "rank" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "role" "Role" DEFAULT 'USER',
ADD COLUMN     "socialmedia" TEXT DEFAULT '',
ADD COLUMN     "submission_consistency" JSONB;

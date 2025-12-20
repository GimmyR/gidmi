"use server";

import { Chapter } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function removeChapters(chapters: Chapter[]) {
    chapters.forEach(async (chapter) => await prisma.chapter.delete({
        where: {
            id: chapter.id
        }
    }));
}
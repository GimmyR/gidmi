"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";

export async function reorderChapter(detail: Detail) {
    const details = await prisma.chapterDetail.findMany({ 
        where: { chapterId: detail.chapterId },
        orderBy: { order: "asc" }
    });

    for(let i = 0; i < details.length; i ++) {
        await prisma.chapterDetail.update({ 
            where: { id: details[i].id }, 
            data: { order: i + 1 } 
        });
    }
}
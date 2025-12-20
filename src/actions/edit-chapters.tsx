"use server";

import { Chapter, Part } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function editChapters(part: Part, chapters: Chapter[]) {
    chapters.forEach(async (chapter, index) => {
        if(chapter.id.startsWith("tmp_"))
            await prisma.chapter.create({
                data: {
                    partId: part.id,
                    order: index + 1,
                    title: chapter.title
                }
            });
        else await prisma.chapter.update({
            where: {
                id: chapter.id
            }, data: {
                order: index + 1,
                title: chapter.title
            }
        });
    });
}
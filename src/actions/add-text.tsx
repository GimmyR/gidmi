"use server";

import { Detail } from "@/interfaces/detail";
import { nextOrder } from "./next-order";
import prisma from "@/lib/prisma";

export async function addText(detail: Detail, language: string) {
    const toAdd = {
        order: await nextOrder(detail) as number,
        type: language,
        content: detail.content as string
    };

    if(detail.partId != undefined) {
        await prisma.partDetail.create({
            data: {...toAdd, partId: detail.partId as string}
        });
    } else if(detail.chapterId != undefined) {
        await prisma.chapterDetail.create({
            data: {...toAdd, chapterId: detail.chapterId as string}
        });
    }
}
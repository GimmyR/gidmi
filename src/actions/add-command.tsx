"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";
import { nextOrder } from "./next-order";

export async function addCommand(detail: Detail) {
    const toAdd = {
        order: await nextOrder(detail) as number,
        type: detail.type as string,
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
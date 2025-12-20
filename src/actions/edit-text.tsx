"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";

export async function editText(detail: Detail, content: string) {
    const toSave = {
        where: {
            id: detail.id
        },
        data: {
            content: detail.type === "text" ? content : JSON.stringify(content)
        }
    };

    if (detail.partId != undefined)
        await prisma.partDetail.update(toSave);
    else await prisma.chapterDetail.update(toSave);
}
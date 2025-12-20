"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";
import { removeFile } from "./remove-file";

export async function removeDetail(detail: Detail) {
    const toRemove = {
        where: {
            id: detail.id
        }
    };

    if(detail.partId)
        await prisma.partDetail.delete(toRemove);
    else if(detail.chapterId)
        await prisma.chapterDetail.delete(toRemove);

    removeFile(detail);
}
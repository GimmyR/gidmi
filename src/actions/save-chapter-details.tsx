"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";
import { getDetailToSave } from "./get-detail-to-save";

export async function saveChapterDetails(details: Detail[]) {
    for(let i = 0; i < details.length; i++) {
        await prisma.chapterDetail.update(getDetailToSave(i + 1, details[i]));
    }
}
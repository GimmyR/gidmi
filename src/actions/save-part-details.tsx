"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";
import { getDetailToSave } from "./get-detail-to-save";

export async function savePartDetails(details: Detail[]) {
    for(let i = 0; i < details.length; i++) {
        await prisma.partDetail.update(getDetailToSave(i + 1, details[i]));
    }
}
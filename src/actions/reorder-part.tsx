"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";

export async function reorderPart(detail: Detail) {
    const details = await prisma.partDetail.findMany({ 
        where: { partId: detail.partId },
        orderBy: { order: "asc" }
    });

    for(let i = 0; i < details.length; i ++) {
        await prisma.partDetail.update({ 
            where: { id: details[i].id }, 
            data: { order: i + 1 } 
        });
    }
}
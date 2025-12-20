"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";

export async function nextOrder(detail: Detail) {
    if(detail.partId != undefined) {
        const partDetail = await prisma.partDetail.findFirst({
            where: {
                partId: detail.partId
            },
            orderBy: {
                order: "desc"
            }
        });
        return (partDetail? partDetail.order + 1 : 1);
    } else if(detail.chapterId != undefined) {
        const chapterDetail = await prisma.chapterDetail.findFirst({
            where: {
                chapterId: detail.chapterId
            },
            orderBy: {
                order: "desc"
            }
        });
        return (chapterDetail? chapterDetail.order + 1 : 1);
    } else throw new Error("CONTENT TYPE NOT FOUND");
}
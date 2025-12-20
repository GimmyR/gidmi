"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";
import fs from "fs";

export async function addFile(detail: Detail, content: string) {
    detail.content = detail.id;
    fs.writeFileSync("./public/code/" + detail.content, content);

    const toEdit = { 
        where: { id: detail.id }, 
        data: { content: detail.content }
    };

    if(detail.partId)
        await prisma.partDetail.update(toEdit);

    else if(detail.chapterId)
        await prisma.chapterDetail.update(toEdit);

    else throw new Error("Detail unknown type");
}
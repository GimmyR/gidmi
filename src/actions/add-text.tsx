"use server";

import { Detail } from "@/interfaces/detail";
import { nextOrder } from "./next-order";
import prisma from "@/lib/prisma";
import { addFile } from "./add-file";

export async function addText(detail: Detail, language: string) {
    const toAdd = {
        order: await nextOrder(detail) as number,
        type: language,
        content: ""
    };

    if(detail.partId != undefined) {

        const added = await prisma.partDetail.create({
            data: {...toAdd, partId: detail.partId as string}
        });

        const added2: Detail = {
            id: added.id,
            partId: added.partId,
            chapterId: undefined,
            order: added.order,
            type: added.type,
            content: added.content
        };

        await addFile(added2, detail.content);

    } else if(detail.chapterId != undefined) {

        const added = await prisma.chapterDetail.create({
            data: {...toAdd, chapterId: detail.chapterId as string}
        });

        const added2: Detail = {
            id: added.id,
            partId: undefined,
            chapterId: added.chapterId,
            order: added.order,
            type: added.type,
            content: added.content
        };

        await addFile(added2, detail.content);

    } else throw new Error("Detail unknown type");
}
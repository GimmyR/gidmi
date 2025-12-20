"use server";

import { Detail } from "@/interfaces/detail";
import { nextOrder } from "./next-order";
import prisma from "@/lib/prisma";
import { editImage } from "./edit-image";

export async function addImage(detail: Detail, data: FormData) {
    const toAdd = {
        order: await nextOrder(detail) as number,
        type: detail.type as string,
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

        await editImage(added2, data);

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

        await editImage(added2, data);

    } else throw new Error("Detail unknown type");
}
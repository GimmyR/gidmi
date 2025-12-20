"use server";

import { Detail } from "@/interfaces/detail";
import prisma from "@/lib/prisma";
import fs from "fs";

export async function editImage(detail: Detail, data: FormData) {
    const file = data.get("image") as File;
    const image = await file.arrayBuffer();
    const filename = detail.id + "-" + file.name;
    fs.appendFileSync("./public/images/" + filename, Buffer.from(image));

    const toEdit = {
        where: { 
            id: detail.id 
        }, 
        data: { 
            content: filename 
        } 
    };

    if (detail.partId != undefined)
        await prisma.partDetail.update(toEdit);
    else await prisma.chapterDetail.update(toEdit);
}
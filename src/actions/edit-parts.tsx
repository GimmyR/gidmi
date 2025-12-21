"use server";

import { Part } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function editParts(guideId: string, parts: Part[]) {
    parts.forEach(async (part, index) => {
        if(part.id.startsWith("tmp_"))
            await prisma.part.create({
                data: {
                    guideId: guideId,
                    order: index + 1,
                    title: part.title
                }
            });
        else
            await prisma.part.update({
                where: {
                    id: part.id
                },
                data: {
                    order: index + 1,
                    title: part.title
                }
            });
    });
}
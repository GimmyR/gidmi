"use server";

import prisma from "@/lib/prisma";

export default async function findChapterById(id: string) {
    const part = await prisma.chapter.findUnique({
        where: {
            id: id
        },
        include: {
            part: true,
            details: {
                orderBy: {
                    order: "asc"
                }
            }
        }
    });

    return part;
}
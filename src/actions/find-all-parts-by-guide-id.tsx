"use server";

import prisma from "@/lib/prisma";

export default async function findAllPartsByGuideId(guideId: string | undefined) {
    if(guideId === undefined)
        throw new Error("Guide ID is undefined");
    
    const parts = await prisma.part.findMany({
        orderBy: {
            order: "asc"
        },
        where: {
            guideId: guideId
        },
        include: {
            chapters: {
                orderBy: {
                    order: "asc"
                }
            }
        }
    });

    return parts;
}
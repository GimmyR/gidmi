"use server";

import prisma from "@/lib/prisma";

export default async function findPartById(id: string) {
    const part = await prisma.part.findUnique({
        where: {
            id: id
        },
        include: {
            details: {
                orderBy: {
                    order: "asc"
                }
            }
        }
    });

    return part;
}
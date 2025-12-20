"use server";

import { Part } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";

export async function removeParts(parts: Part[]) {
    parts.forEach(async (part) => {
        await prisma.part.delete({
            where: {
                id: part.id
            }
        });
    });
}
"use server";

import { Part } from "@/app/generated/prisma/client";
import { editParts } from "./edit-parts";
import { removeParts } from "./remove-parts";

export async function saveParts(guideId: string, toSave: Part[], toRemove: Part[]) {
    await editParts(guideId, toSave);
    await removeParts(toRemove);
}
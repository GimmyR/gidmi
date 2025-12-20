"use server";

import { Part } from "@/app/generated/prisma/client";
import { editParts } from "./edit-parts";
import { removeParts } from "./remove-parts";

export async function saveParts(toSave: Part[], toRemove: Part[]) {
    await editParts(toSave);
    await removeParts(toRemove);
}
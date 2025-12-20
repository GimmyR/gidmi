"use server"

import { Chapter, Part } from "@/app/generated/prisma/client";
import { editChapters } from "./edit-chapters";
import { removeChapters } from "./remove-chapters";

export async function saveChapters(part: Part, chapters: Chapter[], toRemove: Chapter[]) {
    await editChapters(part, chapters);
    await removeChapters(toRemove);
}
"use server";

import { Detail } from "@/interfaces/detail";
import { savePartDetails } from "./save-part-details";
import { saveChapterDetails } from "./save-chapter-details";

export async function saveDetails(contentType: string, details: Detail[]) {
    if(contentType === "part")
        await savePartDetails(details);

    else if(contentType === "chapter")
        await saveChapterDetails(details);

    else throw new Error("Content type unknown");
}
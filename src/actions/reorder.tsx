"use server";

import { Detail } from "@/interfaces/detail";
import { reorderPart } from "./reorder-part";
import { reorderChapter } from "./reorder-chapter";

export async function reorder(detail: Detail) {
    if(detail.partId)
        await reorderPart(detail);

    else if(detail.chapterId)
        await reorderChapter(detail);

    else throw new Error("Detail unknown type");
}
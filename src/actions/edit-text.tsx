"use server";

import { Detail } from "@/interfaces/detail";
import fs from "fs";

export async function editText(detail: Detail, content: string) {
    fs.writeFileSync("./public/code/" + detail.content, content);
}
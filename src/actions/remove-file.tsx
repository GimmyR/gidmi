"use server";

import { Detail } from "@/interfaces/detail";
import fs from "fs";

export async function removeFile(detail: Detail) {
    if(detail.type !== "image" && detail.type !== "command") {
        fs.unlinkSync("./public/code/" + detail.content);
    } else if(detail.type == "image") {
        fs.unlinkSync("./public/images/" + detail.content);
    }
}
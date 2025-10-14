"use server";

import fs from "fs";

export async function fetchFileContent(filename: string) {
    return fs.readFileSync("./public/codes/" + filename, { encoding: "utf8", flag: "r" });
}
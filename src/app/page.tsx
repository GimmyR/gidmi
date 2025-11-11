import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Home - Gidmi'
}

export default async function HomePage() {
    const guide = await prisma.guide.findFirst();
    const part = await prisma.part.findFirst({
        where: {
            guideId: guide?.id
        },
        orderBy: {
            order: "asc"
        }
    });
    
    redirect("/part/" + part?.id);
	return null;
}
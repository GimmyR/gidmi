import Guide from "@/components/guide";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Nextjs fullstack application with Clerk and Prisma - Gidmi'
}

export default async function HomePage() {
    const guide = await prisma.guide.findFirst({
        include: {
            parts: {
                orderBy: {
                    order: "asc"
                },
                include: {
                    chapters: {
                        orderBy: {
                            order: "asc"
                        }
                    }
                }
            },
            details: {
                orderBy: {
                    order: "asc"
                }
            }
        }
    });

	return (
		<Guide title={guide?.title} parts={guide?.parts} details={guide?.details} selected={guide?.parts[0].title}></Guide>
	);
}
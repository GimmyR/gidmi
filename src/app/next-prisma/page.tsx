import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Next & Prisma";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function NextPrismaPage() {
    const previousLink = {
        title: "Customization",
        route: "/customization"
    };

    const nextLink = {
        title: "Install & configure Prisma",
        route: "/install-configure-prisma"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>If you need database in your <strong>Next</strong> application, I will show you how to use an <strong>ORM</strong> like <strong>Prisma</strong> with a <strong>SQLite</strong> database.</p>
        </Guide>
    );
}
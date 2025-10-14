import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Install & configure Prisma";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function InstallConfigurePrismaPage() {
    const previousLink = {
        title: "Next & Prisma",
        route: "/next-prisma"
    };

    const nextLink = {
        title: "Create models",
        route: "/create-models"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>Let's move on to the last part of this guide. Let's install the <strong>Prisma</strong> ORM by running the following command :</p>
            <CommandSnippet>npm install prisma --save-dev</CommandSnippet>
            <p>Second, let's install the database we want to use for our project. With the following command, we install <strong>SQLite</strong> :</p>
            <CommandSnippet>npx prisma init --datasource-provider sqlite --output ../generated/prisma</CommandSnippet>
            <p>Now, run the following command to generate the database and a module for configuring <strong>Prisma</strong> :</p>
            <CommandSnippet>npx prisma db push</CommandSnippet>
            <p>Create the <i>src/lib/<strong>prisma.ts</strong></i> file and paste the following configuration code into it :</p>
            <CodeSnippet language="ts" file="code-14"/>
            <p>That's it ! <strong>Prisma</strong> is correctly configured.</p>
        </Guide>
    );
}
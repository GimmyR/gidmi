import CodeSnippet from "@/components/code-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Next & Clerk";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function ClientServerComponentPage() {
    const previousLink = {
        title: "Client / Server component",
        route: "/client-server-component"
    };

    const nextLink = {
        title: "Create Clerk application",
        route: "/create-clerk-application"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>If you need that someone authenticates into your <strong>Next</strong> application, I will show you in this part of the guide how to use <strong>Clerk</strong>.</p>
        </Guide>
    );
}
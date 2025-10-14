import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Create Clerk application";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function CreateClerkApplicationPage() {
    const previousLink = {
        title: "Next & Clerk",
        route: "/next-clerk"
    };

    const nextLink = {
        title: "Install & configure Clerk",
        route: "/install-configure-clerk"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>Now we'll take a look at authentication with <strong>Clerk</strong>. But to continue with this tutorial, you'll need to sign up to <a href="https://clerk.com/">Clerk</a> and create an application there. Let's take a look at creating a <strong>Clerk</strong> application together.</p>
            <p>To begin with, find a name for your <strong>Clerk</strong> application. In the options for Sign In, I suggest you to only activate <strong>Sign In</strong> with a <strong>Username</strong> like this :</p>
            <img src="/images/screenshot-2.png" className="img-fluid mb-4"/>
            <p>You can explore other options later if you want.</p>
            <p>After validation, you will be taken to a page that suggests the type of framework you want to use with <strong>Clerk</strong> like this :</p>
            <img src="/images/screenshot-3.png" className="img-fluid mb-4"/>
            <p>We'll choose <strong>Next.js</strong>. Therefore, <strong>Clerk</strong> guides you through how to install its library and how to configure it correctly.</p>
        </Guide>
    );
}
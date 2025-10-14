import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Create Sign In page";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function InstallConfigureClerkPage() {
    const previousLink = {
        title: "Install & configure Clerk",
        route: "/install-configure-clerk"
    };

    const nextLink = {
        title: "Protect routes",
        route: "/protect-routes"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>Now I suggest you to create our sign in page <i>src/app/sign-in/[[...slug]]/<strong>page.tsx</strong></i> and to paste into it the following code :</p>
            <CodeSnippet language="tsx" file="code-9"/>
            <p>It is necessary to put this <i>[[...slug]]</i> directory between <i>sign-in</i> directory and <i><strong>page.tsx</strong></i> file. This is something <strong>Clerk</strong> needs to correctly use the sign in page. The same applies to the sign up page (<i>src/app/sign-up/[[..slug]]/<strong>page.tsx</strong></i>).</p>
            <p>The <strong>SignIn</strong> component is the basic component used by <strong>Clerk</strong> to authenticate an user. We'll see later how to customize our sign in page if we don't like its aesthetics.</p>
            <p>Try to press the <strong>Link</strong> we created earlier to access the sign in page we created. You'll notice that our <strong>Link</strong> for logging in is also present on the sign in page. That's because we've integrated it into our <strong>Layout</strong>.</p>
        </Guide>
    );
}
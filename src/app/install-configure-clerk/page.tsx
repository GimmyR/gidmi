import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";
import { code7 } from "./code-7";
import { code8 } from "./code-8";

const title = "Install & configure Clerk";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function InstallConfigureClerkPage() {
    const previousLink = {
        title: "Create Clerk application",
        route: "/create-clerk-application"
    };

    const nextLink = {
        title: "Create Sign In page",
        route: "/create-sign-in-page"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>The first thing to do is to install <strong>Clerk</strong> to work with <strong>Next.js</strong> by running the following command :</p>
            <CommandSnippet>npm install @clerk/nextjs</CommandSnippet>
            <p>Secondly, create the <i><strong>.env</strong></i> file at the root of the project and paste the code <strong>Clerk</strong> suggested you to copy into it.</p>
            <p>Next, create the <i>src/<strong>middleware.ts</strong></i> file and paste the code <strong>Clerk</strong> suggested you to copy into it.</p>
            <p>Finally, replace the contents of <i>src/app/<strong>layout.tsx</strong></i> file with the one <strong>Clerk</strong> suggested you to copy, by keeping your import of <strong>Bootstrap CSS</strong>. However, you&apos;re still going to have to clean up the file of things you don&apos;t need. So I suggest you do something like this (I also recommend you to read the comments I left in the code) :</p>
            <CodeSnippet language="tsx" code={code7}/>
            <p>I suggest you to try out for yourself what we&apos;ve just installed and configured by launching your application (if it is not already done).</p>
            <p>Click on the <strong>Sign up</strong> link and then enter a username, your email address and your password.</p>
            <img src="/images/screenshot-5.png" className="img-fluid mb-4" alt="screenshot-5"/>
            <p>After validation, you are asked to confirm your email address.</p>
            <img src="/images/screenshot-6.png" className="img-fluid mb-4" alt="screenshot-6"/>
            <p>After confirming the email address, we are redirected to our home page where <strong>SignInButton</strong> and <strong>SignUpButton</strong> have disappeared to make way for <strong>UserButton</strong>. Use the latter to sign out.</p>
            <img src="/images/screenshot-7.png" className="img-fluid mb-4" alt="screenshot-7"/>
            <p>If everything works well, we can move on. I&apos;ll grant you that <strong>SignInButton</strong> and <strong>SignUpButton</strong> aren&apos;t very aesthetically pleasing, especially since we chose to use <strong>Bootstrap</strong> instead of <strong>Tailwind</strong>.</p>
            <p>I invite you to delete these components from <i>src/app/<strong>layout.tsx</strong></i> to put there a Link component like this (read the comments again):</p>
            <CodeSnippet language="tsx" code={code8}/>
        </Guide>
    );
}
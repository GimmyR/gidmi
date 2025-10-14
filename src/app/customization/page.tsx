import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Customization";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function CustomizationPage() {
    const previousLink = {
        title: "Protect routes",
        route: "/protect-routes"
    };

    const nextLink = {
        title: "Next & Prisma",
        route: "/next-prisma"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>If you don't like the look of our sign in page, you can customize it. To do so, first install <strong>Clerk Elements</strong> by running the following command :</p>
            <CommandSnippet>npm install @clerk/elements</CommandSnippet>
            <p>Second, create <i>src/components/<strong>login.tsx</strong></i> file and paste the following code into it (read the comments to understand the code) :</p>
            <CodeSnippet language="tsx" file="code-13"/>
            <p>You can isolate and export each of the components we've created, such as <strong>Loading</strong>, <strong>Continue</strong> and <strong>FieldError</strong>, in a single <strong>TSX</strong> file to simplify your code and enhance its readability. This will also enable us to reuse them if necessary.</p>
            <p>If you'd also like to customize the sign up page, please refer to the official Clerk documentation <a href="https://clerk.com/docs/customization/elements/guides/sign-up">here</a>.</p>
            <p>If you'd also like to customize the <strong>UserButton</strong> component, you should know that it's a simple <strong>Dropdown</strong> button with an option to redirect to the <strong>UserProfile</strong> component and an option to sign out. For the sign out option, it's simply a <strong>Link</strong> component or a button that uses the <strong>useClerk</strong> hook to obtain an object that allows you to log out with the <strong>signOut</strong> method. I'll let you refer to the official Clerk documentation <a href="https://clerk.com/docs/references/javascript/clerk#sign-out">here</a> to see this.</p>
            <p>Finally, replace the <strong>SignIn</strong> component in <i>src/app/sign-in/[[...slug]]/<strong>page.tsx</strong></i> file with our Client Component <strong>Login</strong> as follows :</p>
            <CodeSnippet language="tsx" file="code-22"/>
        </Guide>
    );
}
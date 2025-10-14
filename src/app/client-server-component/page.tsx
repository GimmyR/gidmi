import CodeSnippet from "@/components/code-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";
import { code20 } from "./code-20";
import { code21 } from "./code-21";

const title = "Client / Server component";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function ClientServerComponentPage() {
    const previousLink = {
        title: "Create Next project",
        route: "/create-next-project"
    };

    const nextLink = {
        title: "Next & Clerk",
        route: "/next-clerk"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <span className="d-block">With <strong>Next.js</strong>, we have 2 kinds of component :</span>
            <ul className="mb-4">
                <li>Client component</li>
                <li>Server component</li>
            </ul>
            <p>Client components are what we are used to do with <strong>React</strong>, as shown in the following code in the <i>src/components/<strong>dropdown-button.tsx</strong></i> file :</p>
            <CodeSnippet language="tsx" code={code20}/>
            <p>Server components are components that are rendered on the server side before being displayed on the client side. They allow you to define the <strong>metadata</strong> of a web page, for example, which is very useful for improving the <strong>SEO</strong> of a website on the internet.</p>
            <p>With the following code, we see that our page <i><strong>home</strong></i> is a Server component that has static metadata and uses our Client component <i><strong>DropdownButton</strong></i> (the reverse, i.e. using a Server component in a Client component, is not possible):</p>
            <CodeSnippet language="tsx" code={code21}/>
            <p>If you want to know how to dynamically set the <strong>metadata</strong> for our page, please refer to the <a href="https://nextjs.org/docs/app/getting-started/metadata-and-og-images#generated-metadata">official documentation</a> of <strong>Next.js</strong> on the subject.</p>
        </Guide>
    );
}
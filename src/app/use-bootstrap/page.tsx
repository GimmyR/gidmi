import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";
import { code3 } from "./code-3";
import { code4 } from "./code-4";
import { code5 } from "./code-5";
import { code6 } from "./code-6";

const title = "Use Bootstrap";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function UseBootstrapPage() {
    const previousLink = {
        title: "Create Next project",
        route: "/create-next-project"
    };

    const nextLink = {
        title: "Client / Server component",
        route: "/client-server-component"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>Install Bootstrap 5 by running this command :</p>
            <CommandSnippet>npm install bootstrap@5.3.5</CommandSnippet>
            <p>Import Bootstrap CSS into <i>src/app/<strong>layout.tsx</strong></i> like this :</p>
            <CodeSnippet language="tsx" code={code3}/>
            <p>Now, all pages and components in our application can use it. To test whether this works, try to edit the color of the title in <i>src/app/<strong>page.tsx</strong></i> by using a Bootstrap class.</p>
            <p>Therefore, I invite you to add a <strong>Dropdown</strong> button in <i>src/app/<strong>page.tsx</strong></i> like this :</p>
            <CodeSnippet language="tsx" code={code4}/>
            <p>Try to press this button to see if it works. Normally, it doesn&apos;t.</p>
            <p>To make it work, we must use the hook <strong>useEffect</strong> in <i>src/app/about/<strong>page.tsx</strong></i> like this :</p>
            <CodeSnippet language="tsx" code={code5}/>
            <p>Inside the <strong>useEffect</strong> callback function, import <strong>Bootstrap JS</strong> like this :</p>
            <CodeSnippet language="tsx" code={code6}/>
            <p>Now try to press the <strong>Dropdown</strong> button. This should work fine.</p>
            <p>Note that this <strong>Bootstrap JS</strong> is only imported for our home page. If you create a new page or component with another <strong>Dropdown</strong> button without importing this javascript, it won&apos;t work.</p>
            <p>To globally import <strong>Bootstrap JS</strong>, we need to create a Client component. We will examine this in the next chapter.</p>
        </Guide>
    );
}
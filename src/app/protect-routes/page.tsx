import CodeSnippet from "@/components/code-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";
import { code10 } from "./code-10";
import { code11 } from "./code-11";
import { code12 } from "./code-12";

const title = "Protect routes";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function ProtectRoutesPage() {
    const previousLink = {
        title: "Create Sign In page",
        route: "/create-sign-in"
    };

    const nextLink = {
        title: "Customization",
        route: "/customization"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>If you want to prevent unauthenticated users from accessing some pages, this happens in <i>src/<strong>middleware.ts</strong></i> file. Replace the contents of this file with the following code :</p>
            <CodeSnippet language="ts" code={code10}/>
            <p>Here, the <strong>createRouteMatcher</strong> function is used to define the <i>/dashboard</i> route (with everything that may be behind it), which will be inaccessible to those who are not authenticated.</p>
            <p>To test this, create <i>src/app/dashboard/<strong>page.tsx</strong></i> file and paste into it the following code :</p>
            <CodeSnippet language="tsx" code={code11}/>
            <p>Make sure you have logged out before accessing the <strong>Dashboard</strong> page with the <i>/dashboard</i> route. If you try to access the page this way, the application will normally prompt you to log in, otherwise it won&apos;t work.</p>
            <p>Now let&apos;s take a look at the URL of the sign in page that the application requires us to use to authenticate :</p>
            <img src="/images/screenshot-8.png" className="img-fluid mb-4" alt="screenshot-8"/>
            <p>Here we don&apos;t have our application deployed on <i>http://localhost:3000</i> because our application still doesn&apos;t know that we want to use the <i>/sign-in</i> route for this by default.</p>
            <p>To do this, open <i><strong>.env</strong></i> file and append into it the following code :</p>
            <CodeSnippet language="env" code={code12}/>
            <p>It allows you to define by default which route our application should use to allow a user to authenticate. Try to access the <i>/dashboard</i> route again while signed out, and you&apos;ll see that our application now uses the correct route :</p>
            <img src="/images/screenshot-9.png" className="img-fluid mb-4" alt="screenshot-9"/>
        </Guide>
    );
}
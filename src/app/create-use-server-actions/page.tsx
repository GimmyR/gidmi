import CodeSnippet from "@/components/code-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Create & use server actions";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function CreateUseServerActionsPage() {
    const previousLink = {
        title: "Create models",
        route: "/create-models"
    };

    return (
        <Guide title={title} previous={previousLink} next={null}>
            <p>To be able to retrieve our data for our application, we first need to develop an <strong>Server Action</strong> that we&apos;ll call <strong>getAllCategories</strong> in the <i>src/<strong>actions.tsx</strong></i> file like this (read the comments to understand the code) :</p>
            <CodeSnippet language="tsx" file="code-16"/>
            <p>I now invite you to paste the following code into our <strong>HomePage</strong> to retrieve our categories and their products and display them (read the comments).</p>
            <CodeSnippet language="tsx" file="code-17"/>
            <p>This time, to be able to create a product from our front-end, we first need to create a <strong>Server Action</strong> named <strong>createProduct</strong> in the <i>src/<strong>actions.tsx</strong></i> file like this (read the comments) :</p>
            <CodeSnippet language="tsx" file="code-18"/>
            <p>Finally, let&apos;s create a <strong>form</strong> in the <strong>HomePage</strong> that allows us to create a product with the previously created <strong>Server Action</strong>.</p>
            <CodeSnippet language="tsx" file="code-19"/>
        </Guide>
    );
}
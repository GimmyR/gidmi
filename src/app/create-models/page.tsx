import CodeSnippet from "@/components/code-snippet";
import CommandSnippet from "@/components/command-snippet";
import Guide from "@/components/guide";
import { Metadata } from "next";

const title = "Create models";

export const metadata: Metadata = {
    title: title + ' - Gidmi'
}

export default async function CreateModelsPage() {
    const previousLink = {
        title: "Install & configure Prisma",
        route: "/install-configure-prisma"
    };

    const nextLink = {
        title: "Create & use server actions",
        route: "/create-use-server-actions"
    };

    return (
        <Guide title={title} previous={previousLink} next={nextLink}>
            <p>To check whether <strong>Prisma</strong> is working properly, let&apos;s create the <strong>Category</strong> and <strong>Product</strong> model in <i>prisma/<strong>schema.prisma</strong></i> file like this :</p>
            <CodeSnippet language="prisma" file="code-15"/>
            <p>Let&apos;s run the following command to update our database schema :</p>
            <CommandSnippet>npx prisma db push</CommandSnippet>
            <p>Let&apos;s check that our database is working correctly by running the following command :</p>
            <CommandSnippet>npx prisma studio</CommandSnippet>
            <p>You must have a tab entitled <strong>Prisma Studio</strong> in your browser like this :</p>
            <img src="/images/screenshot-10.png" className="img-fluid mb-4" alt="screenshot-10"/>
            <p>This will enable you to manage your database and perform <strong>CRUD</strong> (create - read - update - delete) operations.</p>
            <p>For example, click on the <strong>Category</strong> model, then on the <strong>Add record</strong> button to add a category. Double-click on the <strong>name</strong> field of <strong>Category</strong> to enter this data (e.g. Fruit), then press the <strong>Save 1 change</strong> button. Add another (e.g. Vegetable).</p>
            <img src="/images/screenshot-11.png" className="img-fluid mb-4" alt="screenshot-11"/>
            <p>Afterwards, click on the <strong>Product</strong> model and then on the <strong>Add record</strong> button to add a product. Return to the <strong>Category</strong> model to copy the entire <strong>ID</strong> of the category “Fruit”, then return to the <strong>Product</strong> model to paste this <strong>ID</strong> into the <strong>categoryId</strong> field of our new product. Add a name to it (e.g. Banana) then press the <strong>Add record</strong> button.</p>
            <p>If you return to the <strong>Category</strong> model, you&apos;ll see in the <strong>products</strong> field that 1 product has indeed been added. I invite you to add other products (e.g. Apple for Fruit and Carrot for Vegetable) that will be useful for our next test.</p>
            <img src="/images/screenshot-12.png" className="img-fluid mb-4" alt="screenshot-12"/>
        </Guide>
    );
}
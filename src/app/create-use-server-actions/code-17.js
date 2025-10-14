export const code17 = `
import DropdownButton from "@/components/dropdown-button";
import { Metadata } from "next";
import { getAllCategories } from "@/actions";

// We statically define title and description in the metadata of our page
export const metadata: Metadata = {
    title: "Home - My website",
    description: "Welcome on the home page of my website"
}

// All Server components must be a asynchronous function
export default async function HomePage() {

    // We retrieve all categories with a server action
    const categories = await getAllCategories();

    return (
        <>
            <h1 className="text-success">Hello, world</h1>
            <DropdownButton title="Click here" subtitles={["Category 1", "Category 2", "Category 3"]}/>
            <h2 className="text-primary">Here are my categories and their products :</h2>
            <ol type="1">
                {categories.map(category => 
                    <li key={category.id}>
                        {category.name}
                        <ol type="a">
                            {category.products.map(product => <li key={product.id}>{product.name}</li>)}
                        </ol>
                    </li>
                )}
            </ol>
        </>
    );
}
`;
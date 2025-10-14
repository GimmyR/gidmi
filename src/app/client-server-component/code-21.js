export const code21 = `
import DropdownButton from "@/components/dropdown-button";
import { Metadata } from "next";

// We statically define title and description in the metadata of our page
export const metadata: Metadata = {
    title: "Home - My website",
    description: "Welcome on the home page of my website"
}

// All Server components must be a asynchronous function
export default async function HomePage() {
    return (
        <>
            <h1 className="text-success">Hello, world</h1>
            <DropdownButton title="Click here" subtitles={["Category 1", "Category 2", "Category 3"]}/>
        </>
    );
}
`;
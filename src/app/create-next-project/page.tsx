import Guide from "@/components/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Create Next application - Gidmi'
}

export default async function CreateNextApplicationPage() {
    const previousLink = {
        title: "Next & Bootstrap",
        route: "/next-bootstrap"
    };

    const nextLink = { 
        title: "Use Bootstrap", 
        route: "/use-bootstrap"
    };

	return (
		<Guide title="Getting started" previous={previousLink} next={nextLink}>
            <p>After creating a directory for your project, move in it and open a terminal to run this command :</p>
        </Guide>
	);
}
import Guide from "@/components/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Nextjs fullstack application with Clerk and Prisma'
}

export default async function HomePage() {
    const nextLink = { 
        title: "Next & Bootstrap", 
        route: "/next-bootstrap"
    };

	return (
		<Guide title="Getting started" previous={null} next={nextLink}>
            <div className='position-relative guide-content px-5'>
                <p>
                    In this guide, we will see how to use <strong>Bootstrap (CSS & JavaScript)</strong> with <strong>Next</strong>, 
                    how to authenticate with <strong>Clerk</strong> and how to use database with <strong>Prisma</strong>. 
                    You need to know how to work with <strong>React</strong> and <strong>Next</strong> before following this tutorial.
                </p>
            </div>
        </Guide>
	);
}
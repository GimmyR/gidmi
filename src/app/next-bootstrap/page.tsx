import Guide from "@/components/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Next & Bootstrap'
}

export default async function NextBootstrapPage() {
    const previousLink = {
        title: "Getting started",
        route: "/"
    };

    const nextLink = {
        title: "Create Next project",
        route: "/create-next-project"
    };

    return (
        <Guide title="Next & Bootstrap" previous={previousLink} next={nextLink}>
            <div className="position-relative guide-content px-5">
                <p>
                    Usually, <strong>Next</strong> works with <strong>Tailwind CSS</strong> but if you want to use <strong>Bootstrap (CSS & JavaScript)</strong>, 
                    I will show you in this part of the guide how to do that.
                </p>
            </div>
        </Guide>
    );
}
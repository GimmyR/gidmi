import Link from "next/link";

export default function NavMenu() {
    const parts = [
        { title: "Getting started", link: "/", chapters: [] },
        { title: "Next & Bootstrap", link: "/next-bootstrap", chapters: [
            { title: "Create Next Project", link: "/create-next-project" },
            { title: "Use Bootstrap", link: "/use-bootstrap" },
            { title: "Client / Server Component", link: "/client-server-component" }
        ]},
        { title: "Next & Clerk", link: "/next-clerk", chapters: [
            { title: "Create Clerk application", link: "/create-clerk-application" },
            { title: "Install & configure Clerk", link: "/install-configure-clerk" },
            { title: "Create sign in page", link: "/create-sign-in-page" },
            { title: "Protect routes", link: "/protect-routes" },
            { title: "Customization", link: "/customization" }
        ]},
        { title: "Next & Prisma", link: "/next-prisma", chapters: [
            { title: "Install & configure Prisma", link: "/install-configure-prisma" },
            { title: "Create models", link: "/create-models" },
            { title: "Create & use server actions", link: "/create-use-server-actions" }
        ]}
    ];

    return (
        <ol type="I">
            {parts.map(part =>
                <li key={part.title} className="text-danger">
                    <Link href={part.link} className={ `text-decoration-none text-light` }>{part.title}</Link>
                    <ol type="1">
                        {part.chapters.map(chapter =>
                            <li key={chapter.title} className="text-danger">
                                <Link href={chapter.link} className={ `text-decoration-none text-light` }>{chapter.title}</Link>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}
"use client";

import Link from "next/link";

export default function NavMenu({

    selected

} : {

    selected: string

}) {
    const parts = [
        { title: "Getting started", link: "/", chapters: [] },
        { title: "Next & Bootstrap", link: "/next-bootstrap", chapters: [
            { title: "Create Next project", link: "/create-next-project" },
            { title: "Use Bootstrap", link: "/use-bootstrap" },
            { title: "Client / Server component", link: "/client-server-component" }
        ]},
        { title: "Next & Clerk", link: "/next-clerk", chapters: [
            { title: "Create Clerk application", link: "/create-clerk-application" },
            { title: "Install & configure Clerk", link: "/install-configure-clerk" },
            { title: "Create Sign In page", link: "/create-sign-in-page" },
            { title: "Protect routes", link: "/protect-routes" },
            { title: "Customization", link: "/customization" }
        ]},
        { title: "Next & Prisma", link: "/next-prisma", chapters: [
            { title: "Install & configure Prisma", link: "/install-configure-prisma" },
            { title: "Create models", link: "/create-models" },
            { title: "Create & use server actions", link: "/create-use-server-actions" }
        ]}
    ];

    const hideOffcanvas = () => {
        const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
        const offcanvas = new bootstrap.Offcanvas(document.getElementById("#navigation"));
        offcanvas.hide();
    };

    return (
        <ol type="I">
            {parts.map(part =>
                <li key={part.title} className="text-danger">
                    <Link href={part.link} className={ `text-decoration-none ${(selected === part.title) ? "activated-part" : "text-light"}` } onClick={() => hideOffcanvas()}>{part.title}</Link>
                    <ol type="1">
                        {part.chapters.map(chapter =>
                            <li key={chapter.title} className="text-danger">
                                <Link href={chapter.link} className={ `text-decoration-none ${(selected === chapter.title) ? "activated-part" : "text-light"}` } onClick={() => hideOffcanvas()}>{chapter.title}</Link>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}
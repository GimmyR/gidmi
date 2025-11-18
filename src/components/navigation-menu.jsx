"use client";

import Link from "next/link";

export default function NavMenu({
    parts,
    selected
}) {
    const hideOffcanvas = () => {
        const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
        const offcanvas = new bootstrap.Offcanvas(document.getElementById("#navigation"));
        offcanvas.hide();
    };

    return (
        <ol type="I" className="mb-5">
            {parts.map(part =>
                <li key={part.title} className="text-danger">
                    <Link href={ "/part/" + part.id} className={ `text-decoration-none ${(selected === part.title) ? "activated-part" : "text-light"}` } onClick={() => hideOffcanvas()}>{part.title}</Link>
                    <ol type="1">
                        {part.chapters.map(chapter =>
                            <li key={chapter.title} className="text-danger">
                                <Link href={ "/chapter/" + chapter.id} className={ `text-decoration-none ${(selected === chapter.title) ? "activated-part" : "text-light"}` } onClick={() => hideOffcanvas()}>{chapter.title}</Link>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}
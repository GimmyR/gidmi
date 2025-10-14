export const code5 = `
// Make sure to write "use client" directive when you use a hook in Next application
"use client";

import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {

    }, []);

    return (
        <>
            <h1 className="text-success">Hello, world</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    );
}
`;
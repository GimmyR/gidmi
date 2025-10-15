"use client";

import { useEffect } from "react";

export default function Toggler() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    });

    return (
        <button type="button" className="header-toggler p-0 d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="navigation">
            <i className="bi bi-list fs-1 text-light"></i>
        </button>
    );
}
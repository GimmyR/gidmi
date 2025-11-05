export const code20 =
`// Make sure to write "use client" directive when you develop a client component
"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
    useEffect(() => {
        // Import Bootstrap JS only when component is rendered
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    });

    return null;
}`;
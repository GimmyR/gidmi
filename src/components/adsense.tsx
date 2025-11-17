"use client";

import { useEffect } from "react";

export default function Adsense({ format = "auto" } : { format: string }) {
    useEffect(() => {
        try {
            //@ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch(e) {
            console.log(e)
        }
    });

    return (
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot="5964084213"
            data-ad-format={format}
            data-full-width-responsive="true">
        </ins>
    );
}
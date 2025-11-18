"use client";

import { useEffect } from "react";

export default function Adsense({ slot } : { slot: string }) {
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
            style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%" }}
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}
            data-ad-format="vertical"
            data-full-width-responsive="true">
        </ins>
    );
}
"use client";

import { useEffect } from "react";

export default function Adsense({ slot } : { slot: string }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            try {
            //@ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch(e) {
                console.log(e)
            }
        }, 200);

        return () => clearTimeout(timer);
    });

    return (
        <ins className="adsbygoogle"
            style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", minHeight: "600px" }}
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}
            data-ad-format="vertical"
            data-full-width-responsive="true">
        </ins>
    );
}
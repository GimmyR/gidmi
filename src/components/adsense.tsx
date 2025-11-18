"use client";

import { useEffect } from "react";

export default function Adsense({ align = "text-start", format = "auto" } : { align: string, format: string }) {
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
        <div className={align}>
            <ins className="adsbygoogle"
                style={{ display: "inline-block", width: "100%", minHeight: "100px" }}
                data-ad-client="ca-pub-9490135232409415"
                data-ad-slot="5964084213"
                data-ad-format={format}
                data-full-width-responsive="true">
            </ins>
        </div>
    );
}
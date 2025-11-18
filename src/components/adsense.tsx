"use client";

import { useEffect, useRef } from "react";

export default function Adsense({ slot, className } : { slot: string, className: string }) {
    const ref = useRef(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            if(ref.current) {
                try {
                    //@ts-ignore
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch(e) {
                    console.log(e)
                }
            }
        }, 500);
        
        return () => clearTimeout(timer);
    });

    return (
        <ins ref={ref} className={`adsbygoogle ${className}`}
            style={{ display: "block", width: "100%", minHeight: "auto", height: "auto" }}
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    );
}
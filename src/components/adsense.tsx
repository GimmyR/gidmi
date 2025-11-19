"use client";

import "./adsense.css";
import { useEffect, useRef } from "react";

export default function Adsense({ slot } : { slot: string }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                //@ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch(e) {
                console.log(e)
            }
        }, 1000);
        
        return () => clearTimeout(timer);
    });

    return (
        <ins className="adsbygoogle gidmi-ads"
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}>
        </ins>
    );
}
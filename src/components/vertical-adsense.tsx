"use client";

import "./adsense.css";
import { useEffect } from "react";

export default function VerticalAdsense({ slot } : { slot: string }) {
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
        <ins className="adsbygoogle vertical-ads"
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}>
        </ins>
    );
}
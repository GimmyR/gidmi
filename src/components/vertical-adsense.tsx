"use client";

import "./adsense.css";
import { useEffect, useRef } from "react";

export default function VerticalAdsense({ className = "" } : { className: string }) {
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
        <div className={ `d-block col-12 ${className}` }>
            <ins className="adsbygoogle vertical-ads"
                data-ad-client="ca-pub-9490135232409415"
                data-ad-slot="5964084213"
                data-ad-format="vertical"
                data-full-width-responsive="false">
            </ins>
        </div>
    );
}
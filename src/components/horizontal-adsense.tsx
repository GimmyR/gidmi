"use client";

import "./adsense.css";
import { useEffect } from "react";

export default function HorizontalAdsense({ className = "" } : { className: string }) {
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
        <div className={ `text-center ${className}` }>
            <ins className="adsbygoogle horizontal-ads"
                data-ad-client="ca-pub-9490135232409415"
                data-ad-slot="5964084213"
                data-ad-format="horizontal"
                data-full-width-responsive="false">
            </ins>
        </div>
    );
}
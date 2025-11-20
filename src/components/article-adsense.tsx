"use client";

import { useEffect, useRef } from "react";

export default function ArticleAdsense({ className = "" } : { className: string }) {
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
        }, 200);
        
        return () => clearTimeout(timer);
    });

    return (
        <ins ref={ref} className={ `adsbygoogle d-block text-center ${className}` }
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot="4932900118">
        </ins>
    );
}
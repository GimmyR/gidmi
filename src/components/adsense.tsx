"use client";

import { useEffect, useRef } from "react";

const style = {
    display: "block", 
    width: "100%", 
    minHeight: "150px"
};

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
        <ins className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    );
}
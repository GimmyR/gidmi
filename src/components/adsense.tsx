"use client";

import { useEffect, useRef } from "react";

const style = {
    display: "inline-block", 
    width: "160px", 
    height: "600px"
};

export default function Adsense({ slot } : { slot: string }) {
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
        }, 1000);
        
        return () => clearTimeout(timer);
    });

    return (
        <ins ref={ref} className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-9490135232409415"
            data-ad-slot={slot}>
        </ins>
    );
}
import { useState } from "react";

export default function useClipboard() {

    const [ isCopied, setIsCopied ] = useState(false);

    const copyToClipboard = async (code: string) => {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return { isCopied, copyToClipboard };

}
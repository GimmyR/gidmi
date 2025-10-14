"use client";

import { CodeBlock } from "react-code-block";
import ClipboardIconButton from "./clipboard-icon-button";
import { useEffect, useState } from "react";
import { fetchFileContent } from "@/actions";

export default function CodeSnippet({ 
    
    language, file 

} : {

    language: string,
    file: string

}) {
    const [code, setCode] = useState("");

    const fetchCode = async () => {
        const text = await fetchFileContent(file);
        setCode(text);
    };

    useEffect(() => {
        fetchCode();
    });

    return (
        <CodeBlock code={code} language={language}>
            <div className="position-relative mb-4">
                <CodeBlock.Code className="bg-black rounded-3 p-4">
                    <CodeBlock.LineContent>
                        <CodeBlock.Token/>
                    </CodeBlock.LineContent>
                </CodeBlock.Code>
                <ClipboardIconButton code={code} className="position-absolute top-0 end-0 m-4 text-light"/>
            </div>
        </CodeBlock>
    );
}
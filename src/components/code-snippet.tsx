"use client";

import { CodeBlock } from "react-code-block";
import ClipboardIconButton from "./clipboard-icon-button";

export default function CodeSnippet({ 
    
    language, code 

} : {

    language: string,
    code: string

}) {
    return (
        <CodeBlock code={JSON.parse(code)} language={language}>
            <div className="position-relative mb-4">
                <CodeBlock.Code className="bg-black rounded-3 p-4">
                    <CodeBlock.LineContent>
                        <CodeBlock.Token/>
                    </CodeBlock.LineContent>
                </CodeBlock.Code>
                <ClipboardIconButton code={code} className="btn btn-outline-dark position-absolute top-0 end-0 m-4 text-light"/>
            </div>
        </CodeBlock>
    );
}
"use client";

import { CodeBlock } from "react-code-block";
import ClipboardIconButton from "./clipboard-icon-button";

export default function CommandSnippet({ 
    
    children

} : {

    children: string

}) {

    return (
        <CodeBlock code={children} language="shell">
            <div className="position-relative mb-4">
                <CodeBlock.Code className="bg-black rounded-3 px-4 py-3">
                    <CodeBlock.LineContent>
                        <CodeBlock.Token/>
                    </CodeBlock.LineContent>
                </CodeBlock.Code>
                <ClipboardIconButton code={children} className="btn btn-outline-dark position-absolute top-0 end-0 mt-2 me-4 text-light"/>
            </div>
        </CodeBlock>
    );

}
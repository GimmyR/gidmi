import CommandSnippet from "./command-snippet";
import CodeSnippet from "./code-snippet";

export default async function GuideContentByType({ detail }) {
    return (
        <>
            {detail.type === "text" ?
                <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
            : detail.type === "command" ?
                <div className='mb-5'>
                    <CommandSnippet>{detail.content}</CommandSnippet>
                </div>
            : detail.type === "image" ?
                <div className="mb-5">
                    <img src={`/images/${detail.content}`} className='img-fluid'/>
                </div>
            : 
                <div className='mb-5'>
                    <CodeSnippet language={detail.type} code={detail.content}/>
                </div>
            }
        </>
    );
}
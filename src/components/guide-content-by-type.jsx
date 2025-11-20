import CommandSnippet from "./command-snippet";
import CodeSnippet from "./code-snippet";
import ArticleAdsense from "./article-adsense";

export default async function GuideContentByType({ detail }) {
    return (
        <>
            {detail.type === "text" ?
                <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
            : detail.type === "command" ?
                <CommandSnippet>{detail.content}</CommandSnippet>
            : detail.type === "image" ?
                <img src={`/images/${detail.content}`} className='img-fluid mb-5'/>
            : <CodeSnippet language={detail.type} code={detail.content}/>}
            
            {detail.type !== "text" && <ArticleAdsense className="my-3"/>}
        </>
    );
}
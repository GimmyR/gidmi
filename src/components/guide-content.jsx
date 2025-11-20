import GuideContentByType from "./guide-content-by-type";
import ArticleAdsense from "./article-adsense";

export default function GuideContent({ detail }) {
    return (
        <>
            <GuideContentByType detail={detail}/>
            {detail.type === "image" && <ArticleAdsense className="my-5"/>}
        </>
    );
}
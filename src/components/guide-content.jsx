import GuideContentByType from "./guide-content-by-type";
import ArticleAdsense from "./article-adsense";

export default function GuideContent({ detail }) {
    return (
        <>
            <div className='col-12 position-relative guide-content'>
                <GuideContentByType detail={detail}/>
                {detail.type === "image" && <ArticleAdsense className="my-5"/>}
            </div>
        </>
    );
}
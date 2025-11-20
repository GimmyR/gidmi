import GuideContentByType from "./guide-content-by-type";

export default function GuideContent({ detail }) {
    return (
        <>
            <div className='position-relative guide-content'>
                <GuideContentByType detail={detail}/>
                {detail.type !== "text" && detail.type !== "command" && <ArticleAdsense className="my-5"/>}
            </div>
        </>
    );
}
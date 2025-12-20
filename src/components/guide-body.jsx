import GuideContentByType from "./guide-content-by-type";

export default async function GuideBody({ title, details }) {
    return (
        <>
            <h1 className="mb-5">{title}</h1>
            {details.map((detail) => <GuideContentByType key={detail.id} detail={detail}/>)}
        </>
    );
}
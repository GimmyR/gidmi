import findAllPartsByGuideId from "@/actions/find-all-parts-by-guide-id";
import findPartById from "@/actions/find-part-by-id";
import Guide from "@/components/guide";

type Props = { 
    params: Promise<{ id: string }>
};

export async function generateMetadata({ params } : Props) {
    const { id } = await params;
    const part = await findPartById(id);
    return {
        title: part?.title + " - Gidmi"
    };
}

export default async function PartPage({ params } : Props) {
    const { id } = await params;
    const part = await findPartById(id);
    const parts = await findAllPartsByGuideId(part?.guideId);
    
    return (
        <Guide contentID={id} contentType="part" title={part?.title} parts={parts} details={part?.details}/>
    );
}
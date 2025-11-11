import findAllPartsByGuideId from "@/actions/find-all-parts-by-guide-id";
import findPartById from "@/actions/find-part-by-id";
import Guide from "@/components/guide";

export default async function PartPage({ params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const part = await findPartById(id);
    const parts = await findAllPartsByGuideId(part?.guideId);
    
    return (
        <Guide title={part?.title} parts={parts} details={part?.details}/>
    );
}
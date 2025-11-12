import findAllPartsByGuideId from "@/actions/find-all-parts-by-guide-id";
import findChapterById from "@/actions/find-chapter-by-id";
import Guide from "@/components/guide";

type Props = { 
    params: Promise<{ id: string }>
};

export async function generateMetadata({ params } : Props) {
    const { id } = await params;
    const chapter = await findChapterById(id);
    return {
        title: chapter?.title + " - Gidmi"
    };
}

export default async function ChapterPage({ params } : Props) {
    const { id } = await params;
    const chapter = await findChapterById(id);
    const parts = await findAllPartsByGuideId(chapter?.part.guideId);
    
    return (
        <Guide title={chapter?.title} parts={parts} details={chapter?.details}/>
    );
}
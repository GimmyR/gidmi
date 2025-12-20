import EditContentButton from "./edit-content-button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import GuideContentByType from "./guide-content-by-type";

export default function SortableGuideContent({ detail, setSelectedDetail }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: detail.id });
    const style = { transition, transform: CSS.Translate.toString(transform) };

    const getEditContentButtonStyle = () => {
        if(detail.type === "command")
            return { marginTop: 15 };
        else return null;
    };

    return (
        <div ref={setNodeRef} {...attributes} style={style} className='position-relative guide-content px-5' aria-describedby={ "DndDescribedBy-" + detail.id }>
            <div {...listeners}>
                <GuideContentByType detail={detail}/>
            </div>
            <EditContentButton selectDetail={() => setSelectedDetail(detail)} style={getEditContentButtonStyle()}/>
        </div>
    );
}
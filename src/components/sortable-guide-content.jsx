import EditContentButton from "./edit-content-button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SortableGuideContentByType from "./sortable-guide-content-by-type";

export default function SortableGuideContent({ detail, setSelectedDetail }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: detail.id });
    const style = { transition, transform: CSS.Translate.toString(transform) };

    const getEditContentButtonStyle = () => {
        if(detail.type === "command")
            return { marginTop: 15 };
        else return null;
    };

    return (
        <div ref={setNodeRef} {...attributes} style={style} className='mb-3 guide-content' aria-describedby={ "DndDescribedBy-" + detail.id }>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-end mb-1">
                    <EditContentButton selectDetail={() => setSelectedDetail(detail)} style={getEditContentButtonStyle()}/>
                </div>
                <div className="border border-secondary" {...listeners}>
                    <SortableGuideContentByType detail={detail}/>
                </div>
            </div>
        </div>
    );
}
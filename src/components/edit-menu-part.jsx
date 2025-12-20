import EditButton from "./edit-button";
import RemoveButton from "./remove-button";
import EditChaptersButton from "./edit-chapters-button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function EditMenuPart({ part, index, length,setEdit, removePart, selected, setPart, setChapters }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: part.id });
    const style = { transition, transform: CSS.Translate.toString(transform) };

    const handleChaptersButton = () => {
        setPart();
        setChapters();
    };

    return (
        <div ref={setNodeRef} style={style} className={ `d-flex flex-row justify-content-between align-items-center bg-secondary ${index < length - 1 ? "mb-3" : ""} ${selected? "border border-danger border-3" : ""}` }>
            <div {...attributes} {...listeners} className="col-9 ps-2 py-2" aria-describedby={ "DndDescribedBy-" + part.id }>
                {part.title}
            </div>
            <div className="col-3">
                <EditButton contentType="part" toEdit={part} setEdit={setEdit}/>
                <RemoveButton remove={() => removePart(part)}/>
                <EditChaptersButton setChapters={handleChaptersButton}/>
            </div>
        </div>
    );
}
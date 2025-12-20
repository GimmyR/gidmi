import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EditButton from "./edit-button";
import RemoveButton from "./remove-button";

export default function EditMenuChapter({ chapter, index, length, setEdit, removeChapter, selected }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: chapter.id });
    const style = { transition, transform: CSS.Translate.toString(transform) };

    return (
        <div ref={setNodeRef} style={style} className={ `d-flex flex-row justify-content-between align-items-center bg-secondary ${index < length - 1 ? "mb-3" : ""} ${selected? "border border-danger border-3" : ""}` }>
            <div {...attributes} {...listeners} className="col-9 ps-2 py-2">
                {chapter.title}
            </div>
            <div className="col-3 d-flex flex-row justify-content-end pe-2">
                <EditButton contentType="chapter" toEdit={chapter} setEdit={setEdit}/>
                <RemoveButton remove={() => removeChapter(chapter)}/>
            </div>
        </div>
    );
}
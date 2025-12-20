import { closestCorners, DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SavePartForm from "./save-part-form";
import EditMenuPart from "./edit-menu-part";
import { useState } from "react";

export default function EditMenuModalBody({ menu, setMenu, handleDragEnd, removePart, setPart, setChapters }) {
    const [partToEdit, setPartToEdit] = useState();

    return (
        <>
            <SavePartForm menu={menu} setMenu={setMenu} partToEdit={partToEdit} setPartToEdit={setPartToEdit}/>
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <SortableContext items={menu} strategy={verticalListSortingStrategy}>
                    {menu.map((part, index) => <EditMenuPart key={part.id} part={part} index={index} length={menu.length} setEdit={setPartToEdit} removePart={removePart} setPart={() => setPart(part)} setChapters={() => setChapters([...part.chapters])} selected={partToEdit != undefined && part.id == partToEdit.id}/>)}
                </SortableContext>
            </DndContext>
        </>
    );
}
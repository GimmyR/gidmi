import { closestCorners, DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SaveChapterForm from "./save-chapter-form";
import EditMenuChapter from "./edit-menu-chapter";
import { useState } from "react";

export default function EditPartModalBody({ chapters, setChapters, handleDragEnd, removeChapter }) {
    const [chapterToEdit, setChapterToEdit] = useState();
    return (
        <>
            <SaveChapterForm chapters={chapters} setChapters={setChapters} chapterToEdit={chapterToEdit} setChapterToEdit={setChapterToEdit}/>
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <SortableContext items={chapters} strategy={verticalListSortingStrategy}>
                    {chapters.map((chapter, index) => <EditMenuChapter key={chapter.id} chapter={chapter} index={index} length={chapters.length} setEdit={setChapterToEdit} removeChapter={removeChapter} selected={chapterToEdit != undefined && chapter.id == chapterToEdit.id}/>)}
                </SortableContext>
            </DndContext>
        </>
    );
}
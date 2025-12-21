"use client";

import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import EditMenuModalBody from "./edit-menu-modal-body";
import EditPartModalBody from "./edit-part-modal-body";
import { saveChapters } from "@/actions/save-chapters";
import { saveParts } from "@/actions/save-parts";

export default function EditMenuModal({ parts }) {
    const [menu, setMenu] = useState([...parts]);
    const [part, setPart] = useState();
    const [chapters, setChapters] = useState([]);
    const [toRemove, setToRemove] = useState([]);

    const handleCancel = () => {
        setMenu([...parts]);
        setChapters([]);
    };

    const removePart = (part) => {
        let index = menu.findIndex(e => e.id == part.id);
        menu.splice(index, 1);
        setMenu([...menu]);
        toRemove.push(part);
        setToRemove([...toRemove]);
    };

    const removeChapter = (chapter) => {
        let index = chapters.findIndex(e => e.id == chapter.id);
        chapters.splice(index, 1);
        setChapters([...chapters]);
        toRemove.push(chapter);
        setToRemove([...toRemove]);
    };

    const handleDragEndMenu = (event) => {
        const { active, over } = event;

        if(active.id === over.id) return;

        setMenu((menu) => {
            const originalPos = getPartPosMenu(active.id);
            const newPos = getPartPosMenu(over.id);

            return arrayMove(menu, originalPos, newPos);
        });
    };

    const handleDragEndChapter = (event) => {
        const { active, over } = event;

        if(active.id === over.id) return;

        setChapters((chapters) => {
            const originalPos = getPartPosChapter(active.id);
            const newPos = getPartPosChapter(over.id);

            return arrayMove(chapters, originalPos, newPos);
        });
    };

    const getPartPosMenu = (id) => menu.findIndex((part) => part.id === id);

    const getPartPosChapter = (id) => chapters.findIndex((chapter) => chapter.id === id);

    const resetAll = async () => {
        window.location.reload();
    };

    const saveMenu = async () => {
        if(part != undefined) {

            await saveChapters(part, chapters, toRemove);
            resetAll();
            
        } else {

            await saveParts(parts[0].guideId, menu, toRemove);
            resetAll();

        }
    };

    const handleBackToParts = () => {
        setPart(undefined);
        setChapters([]);
    };

    return (
        <div className="modal fade" id="edit-menu-modal" tabIndex="-1" aria-labelledby="edit-menu-modal-label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header border-bottom border-secondary">
                        <h1 className="modal-title fs-5" id="edit-menu-modal-label">Edit menu</h1>
                    </div>
                    <div className="modal-body">
                        {menu && !part && <EditMenuModalBody menu={menu} setMenu={setMenu} handleDragEnd={handleDragEndMenu} removePart={removePart} setPart={setPart} setChapters={setChapters}/>}
                        {menu && part && <EditPartModalBody chapters={chapters} setChapters={setChapters} handleDragEnd={handleDragEndChapter} removeChapter={removeChapter}/>}
                    </div>
                    <div className="modal-footer border-top border-secondary">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>Cancel</button>
                        {part && <button type="button" className="btn btn-primary" onClick={handleBackToParts}>Back to parts</button>}
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={saveMenu}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
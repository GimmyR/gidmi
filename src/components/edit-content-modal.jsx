"use client";

import { useEffect, useState } from "react";
import EditContentModalBody from "./edit-content-modal-body";
import { editCommand } from "@/actions/edit-command";
import { editImage } from "@/actions/edit-image";
import { editText } from "@/actions/edit-text";
import { removeDetail } from "@/actions/remove-detail";
import { reorder } from "@/actions/reorder";

export default function EditContentModal({ detail, resetDetail, fetchDetails }) {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const fetchCode = async () => {
        if(detail?.type !== "command" && detail?.type !== "image" && detail?.type !== "text") {
            setContent(JSON.parse(detail?.content));
        } else if(detail?.type === "command" || detail?.type === "text") {
            setContent(detail?.content);
        }
    };

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    
    const handleSaveChanges = async () => {
        if(detail?.type === "command") {

            await editCommand(detail, content);
            fetchDetails();
            
        } else if(detail?.type !== "command" && detail?.type !== "image") {
            
            await editText(detail, content);
            fetchDetails();

        } else if(detail?.type === "image" && image != null) {

            const data = new FormData();
            data.append("image", image);
            await editImage(detail, data);
            fetchDetails();

        } else throw new Error("SAVING WHAT ?!");
    };

    const handleRemove = async () => {
        await removeDetail(detail);
        await reorder(detail);
        fetchDetails();
    };

    useEffect(() => {
        fetchCode();
    }, [detail]);

    return (
        <div className="modal fade" id="edit-content-modal" tabIndex="-1" aria-labelledby="edit-content-modal-label" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header border-bottom border-secondary">
                        <h1 className="modal-title fs-5" id="edit-content-modal-label">Edit content</h1>
                    </div>
                    <div className="modal-body">
                        {detail && <EditContentModalBody type={detail.type} content={content} handleChange={handleChange} handleImageChange={handleImageChange}/>}
                    </div>
                    <div className="modal-footer border-top border-secondary">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetDetail}>Cancel</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleRemove}>Remove</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSaveChanges}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
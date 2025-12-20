"use client";

import { useEffect, useState } from "react";
import AddContentModalBody from "./add-content-modal-body";
import { addCommand } from "@/actions/add-command";
import { addImage } from "@/actions/add-image";
import { addText } from "@/actions/add-text";

export default function AddContentModal({ contentID, contentType, fetchDetails }) {
    const [detail, setDetail] = useState({ type: "", content: "" });
    const [language, setLanguage] = useState("text");
    const [image, setImage] = useState(null);
    
    const handleSaveChanges = async () => {
        if(detail.type == "command") {
            await addCommand(detail);
            resetDetail();
            fetchDetails();
        } else if(detail.type == "text") {
            await addText(detail, language);
            resetDetail();
            fetchDetails();
        } else if(detail.type == "image") {
            const data = new FormData();
            data.append("image", image);
            await addImage(detail, data);
            resetDetail();
            fetchDetails();
        } else {
            const detail2 = {...detail, content: JSON.stringify(detail.content)};
            await addText(detail2, language);
            resetDetail();
            fetchDetails();
        }
    };

    const resetDetail = () => {
        detail.type = "";
        detail.content = "";
        setDetail({...detail});
    };

    const setContentType = () => {
        if(contentType == "part") {
            detail.partId = contentID;
            setDetail({...detail});
        } else if(contentType == "chapter") {
            detail.chapterId = contentID;
            setDetail({...detail});
        }
    };

    useEffect(() => {
        setContentType();
    }, []);

    return (
        <div className="modal fade" id="add-content-modal" tabIndex="-1" aria-labelledby="add-content-modal-label" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header border-bottom border-secondary">
                        <h1 className="modal-title fs-5" id="add-content-modal-label">Add content</h1>
                    </div>
                    <div className="modal-body">
                        <AddContentModalBody detail={detail} setDetail={setDetail} language={language} setLanguage={setLanguage} setImage={setImage}/>
                    </div>
                    <div className="modal-footer border-top border-secondary">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetDetail}>Cancel</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSaveChanges}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
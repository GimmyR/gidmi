"use client";

import { useEffect, useState } from "react";
import { closestCorners, DndContext,  } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableGuideContent from "./sortable-guide-content";
import AddContentModal from "./add-content-modal";
import EditContentModal from "./edit-content-modal";
import AddContentButton from "./add-content-button";
import SaveOrderButton from "./save-order-button";
import CancelReorderButton from "./cancel-reorder-button";
import { saveDetails } from "@/actions/save-details";

export default function SortableGuideBody({ title, details, contentID, contentType }) {
    const [ guideDetails, setGuideDetails ] = useState([...details]);
    const [ selectedDetail, setSelectedDetail ] = useState();
    const [ dragEnded, setDragEnded ] = useState(false);

    const reloadPage = () => {
        window.location.reload();
    }; 

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if(active.id === over.id) return;

        setGuideDetails((guideDetails) => {
            const originalPos = guideDetails.findIndex((detail) => detail.id === active.id);
            const newPos = guideDetails.findIndex((detail) => detail.id === over.id);

            return arrayMove(guideDetails, originalPos, newPos);
        });

        setDragEnded(true);
    };

    const handleSaveOrder = async () => {
        await saveDetails(contentType, guideDetails);
        setDragEnded(false);
    };

    const handleCancelReorder = () => {
        setGuideDetails([...details]);
        setDragEnded(false);
    };

    useEffect(() => {
        setGuideDetails([...details]);
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, [details]);

    return (
        <>
            <h1 className='mb-5'>
                {title}
                <AddContentButton/>
                {dragEnded && <><SaveOrderButton onClick={handleSaveOrder}/><CancelReorderButton onClick={handleCancelReorder}/></>}
            </h1>
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <SortableContext items={guideDetails} strategy={verticalListSortingStrategy}>
                    {guideDetails.map(detail => <SortableGuideContent key={detail.id} detail={detail} setSelectedDetail={setSelectedDetail}/>)}
                </SortableContext>
            </DndContext>
            <AddContentModal contentID={contentID} contentType={contentType} fetchDetails={reloadPage}/>
            <EditContentModal detail={selectedDetail} resetDetail={() => setSelectedDetail(null)} fetchDetails={reloadPage}/>
        </>
    );
}
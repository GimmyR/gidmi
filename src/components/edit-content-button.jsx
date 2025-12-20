import Link from "next/link";

export default function EditContentButton({ selectDetail }) {
    return (
        <Link href="#" className="btn btn-outline-light rounded-0 edit-button" title="Edit content" onClick={selectDetail} data-bs-toggle="modal" data-bs-target="#edit-content-modal">
            <i className="bi bi-pencil"></i> Edit
        </Link>
    );
}
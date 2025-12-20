import Link from "next/link";

export default function EditContentButton({ selectDetail, style }) {
    return (
        <Link href="#" className="position-absolute top-0 start-0 text-decoration-none edit-button" style={style} title="Edit content" onClick={selectDetail} data-bs-toggle="modal" data-bs-target="#edit-content-modal">
            <i className="bi bi-pencil fs-6"></i>
        </Link>
    );
}
import Link from "next/link";

export default function AddContentButton() {
    return (
        <Link href="#" className="text-decoration-none ms-3 edit-button" title="Add content" data-bs-toggle="modal" data-bs-target="#add-content-modal">
            <i className="bi bi-journal-plus fs-5 align-middle"></i>
        </Link>
    );
}
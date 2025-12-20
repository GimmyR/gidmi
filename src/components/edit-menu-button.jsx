import Link from "next/link";

export default function EditMenuButton() {
    return (
        <Link href="#" className="btn btn-danger col-12" data-bs-toggle="modal" data-bs-target="#edit-menu-modal">
            <i className="bi bi-pencil me-2"></i>Edit menu
        </Link>
    );
}
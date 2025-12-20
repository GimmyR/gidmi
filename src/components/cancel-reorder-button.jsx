import Link from "next/link";

export default function CancelReorderButton({ onClick }) {
    return (
        <Link href="#" className="text-decoration-none ms-3 edit-button" title="Cancel" onClick={onClick}>
            <i className="bi bi-x-circle-fill fs-5 align-middle text-primary"></i>
        </Link>
    );
}
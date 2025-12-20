import Link from "next/link";

export default function SaveOrderButton({ onClick }) {
    return (
        <Link href="#" className="text-decoration-none ms-3 edit-button" title="Save order" onClick={onClick}>
            <i className="bi bi-check-circle-fill fs-5 align-middle text-danger"></i>
        </Link>
    );
}
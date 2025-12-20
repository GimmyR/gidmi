import Link from "next/link";

export default function RemoveButton({ remove }) {
    return (
        <Link href="#" className="text-decoration-none ms-3 edit-button" title="Remove" onClick={remove}>
            <i className="bi bi-trash fs-5 align-middle"></i>
        </Link>
    );
}
import Link from "next/link";

export default function EditChaptersButton({ setChapters }) {
    return (
        <Link href="#" className="text-decoration-none ms-3 add-chapter-button" title="Edit chapters" onClick={setChapters}>
            <i className="bi bi-list-ol fs-5 align-middle"></i>
        </Link>
    );
}
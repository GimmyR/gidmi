import Link from "next/link";

export default function EditButton({ contentType, toEdit, setEdit }) {
    return (
        <Link href="#" onClick={() => setEdit({...toEdit})} className="text-decoration-none ms-3 edit-button" title={ `Edit${contentType ? " " + contentType : ""}` }>
            <i className="bi bi-pencil fs-5 align-middle"></i>
        </Link>
    );
}
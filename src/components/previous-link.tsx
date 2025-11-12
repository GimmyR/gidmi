import Link from "next/link";

export default function PreviousLink({ link } : { link: { route: string, title: string } | undefined }) {
    if(!link)
        return null;
    
    return (
        <Link href={link.route} className="d-flex flex-row align-items-center text-decoration-none page-link">
            <i className="bi bi-chevron-left me-3"></i>
            <span>
                <span className="d-block fw-bold">Previous</span>
                <span>{link.title}</span>
            </span>
        </Link>
    );
}
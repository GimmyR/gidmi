import Link from "next/link";

export default function NextLink({ link } : { link: { route: string, title: string } | undefined }) {
    if(!link)
        return null;
    
    return (
        <Link href={link.route} className="d-flex flex-row align-items-center text-decoration-none page-link">
            <span className="text-end">
                <span className="d-block fw-bold">Next</span>
                <span>{link.title}</span>
            </span>
            <i className="bi bi-chevron-right ms-3"></i>
        </Link>
    );
}
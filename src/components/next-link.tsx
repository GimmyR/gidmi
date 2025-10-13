export default function NextLink({ 
    link 
} : { 
    link: { route: string, title: string } | null
}) {
    if(!link)
        return null;
    
    return (
        <a href={link.route} className="d-flex flex-row align-items-center text-decoration-none page-link">
            <span className="text-end">
                <span className="d-block fw-bold">Next</span>
                <span>{link.title}</span>
            </span>
            <i className="bi bi-chevron-right ms-3"></i>
        </a>
    );
}
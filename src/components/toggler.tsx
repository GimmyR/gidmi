export default function Toggler() {
    return (
        <button type="button" className="header-toggler p-0 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="navigation">
            <i className="bi bi-list fs-1 text-light"></i>
        </button>
    );
}
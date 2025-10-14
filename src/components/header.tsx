import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-danger fixed-top">
            <div className="container-fluid d-flex flex-row justify-content-between justify-content-xl-center align-items-center py-2">
                <Link href="/" className="d-flex flex-row align-items-center text-decoration-none fs-3 fw-bold text-light">
                    <Image src="/images/logo.png" className='img-fluid image-icon me-1' alt="logo"/>Gidmi
                </Link>
                <button type="button" className="header-toggler p-0 d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#navigation" aria-controls="navigation">
                    <i className="bi bi-list fs-1 text-light"></i>
                </button>
            </div>
        </header>
    );
}
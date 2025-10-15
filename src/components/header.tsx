import Link from "next/link";
import Toggler from "./toggler";

export default function Header() {
    return (
        <header className="bg-danger fixed-top">
            <div className="container-fluid d-flex flex-row justify-content-between justify-content-xl-center align-items-center py-2">
                <Link href="/" className="d-flex flex-row align-items-center text-decoration-none fs-3 fw-bold text-light">
                    <img src="/images/logo.png" className='img-fluid image-icon me-1' alt="logo"/>Gidmi
                </Link>
                <Toggler/>
            </div>
        </header>
    );
}
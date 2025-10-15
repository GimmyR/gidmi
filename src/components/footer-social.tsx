import Link from "next/link";

export default function FooterSocial() {
    return (
        <>
            <strong className="text-light mb-1">Social</strong>
            <ul className="nav flex-column">
                <Link href="https://www.linkedin.com/in/gimmy-razafimbelo-7a0154168/" className="nav-link text-gray px-0 py-0">LinkedIn</Link>
                <Link href="https://github.com/GimmyR/gidmi" className="nav-link text-gray px-0 py-0">GitHub</Link>
            </ul>
        </>
    );
}
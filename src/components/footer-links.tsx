import Link from "next/link";

export default function FooterLinks() {
    return (
        <>
            <strong className="text-light mb-1">Links</strong>
            <ul className="nav flex-column">
                <Link href="/" className="nav-link text-gray px-0 py-0">Home</Link>
                <Link href="/contact" className="nav-link text-gray px-0 py-0">Contact</Link>
            </ul>
        </>
    );
}
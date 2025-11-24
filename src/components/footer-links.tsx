import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function FooterLinks() {
    return (
        <>
            <strong className="text-light mb-1">Links</strong>
            <ul className="nav flex-column">
                <Link href="/" className="nav-link text-gray px-0 py-0">Home</Link>
                <Link href="/contact" className="nav-link text-gray px-0 py-0">Contact</Link>
                <SignedIn>
                    <Link href="/sign-out" className="nav-link text-gray px-0 py-0">Sign out</Link>
                </SignedIn>
                <SignedOut>
                    <Link href="/sign-in" className="nav-link text-gray px-0 py-0">Sign in</Link>
                </SignedOut>
            </ul>
        </>
    );
}
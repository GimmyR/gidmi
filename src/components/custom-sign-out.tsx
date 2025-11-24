"use client"

import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CustomSignOut() {
    const router = useRouter();
    const clerk = useClerk();

    const handleSignOut = async () => {
        await clerk.signOut();
    };
    
    return (
        <>
            <h1 className="text-light text-center fs-3">Are you sure you want to sign out ?</h1>
            <div className="d-flex flex-row justify-content-center mt-3">
                <Link href="#" onClick={() => router.back()} className="btn btn-secondary col-2 me-2">No</Link>
                <Link href="#" onClick={handleSignOut} className="btn btn-danger col-2">Yes</Link>
            </div>
        </>
    );
}
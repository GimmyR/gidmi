import CustomSignOut from "@/components/custom-sign-out";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign out',
    description: 'This page will allow you to sign out.'
}

export default async function SignOutPage() {
    return (
        <div className="container-fluid min-vh-100 pt-5">
            <div className="d-flex flex-row justify-content-center pt-5">
                <div className="d-flex flex-column col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4">
                    <CustomSignOut/>
                </div>
            </div>
        </div>
    );
}
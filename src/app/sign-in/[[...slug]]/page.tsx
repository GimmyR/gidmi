import CustomSignIn from "@/components/custom-sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sign in',
    description: 'This page will allow you to sign in as a writer.'
}

export default async function SignInPage() {
    return (
        <div className='container min-vh-100 pt-5'>
            <div className='d-flex flex-row justify-content-center'>
                <CustomSignIn/>
            </div>
        </div>
    )
}
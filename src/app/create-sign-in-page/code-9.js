export const code9 =
`import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign in - My website",
    description: "You can sign in on my website on this page"
};

export default async function SignInPage() {
    return (
        <SignIn/>
    );
}`;
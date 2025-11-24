'use client'

import * as SignIn from '@clerk/elements/sign-in'
import SignInUsername from '@/components/sign-in-username';
import SignInPassword from '@/components/sign-in-password';

export default function CustomSignIn() {
    return (
        <SignIn.Root>
            <SignInUsername/>
            <SignInPassword/>
        </SignIn.Root>
    );
}
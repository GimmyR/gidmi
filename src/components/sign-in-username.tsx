import * as SignIn from "@clerk/elements/sign-in";
import * as Clerk from "@clerk/elements/common";
import Continue from "@/components/continue";
import FieldError from "@/components/field-error";

export default function SignInUsername() {

    return (
        <SignIn.Step name="start" className='d-flex flex-column col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 p-5'>
            <h1 className='fs-2 mb-5 text-center text-light'>Sign in as editor</h1>
            <Clerk.Field name="identifier" className='d-flex flex-column align-items-center'>
                <Clerk.Input type='text' placeholder="username" className='form-control mb-3'/>
                <SignIn.Action submit asChild>
                    <Clerk.Loading>{(isLoading) => <Continue isLoading={isLoading}/>}</Clerk.Loading>
                </SignIn.Action>
                <Clerk.FieldError className='text-danger error-style'>
                    {({ message }) => <FieldError message={message}/>}
                </Clerk.FieldError>
            </Clerk.Field>
        </SignIn.Step>
    );

}
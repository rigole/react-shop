import React from "react";
import { SignInAndSignUpStyles } from './sign-in-and-sign-up.styles'
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
    <SignInAndSignUpStyles>
        <SignInComponent/>
        <SignUp/>
    </SignInAndSignUpStyles>
)

export default SignInAndSignUpPage


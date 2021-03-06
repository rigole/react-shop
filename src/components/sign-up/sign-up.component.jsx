import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtonComponent from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import {SignUpTitle, SignUpContainer} from  './sign-up.styles';
import {match} from "react-router-dom";

class SignUp extends React.Component{
    constructor() {
        super();

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if (password != confirmPassword) {
             alert("Password don't match" )
            return
        }
        
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }

    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirm your password'
                        required
                    />
                    <CustomButtonComponent type='submit'>SIGN UP</CustomButtonComponent>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp
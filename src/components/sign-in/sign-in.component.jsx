import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";

class SignInComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({[name]: value})
    }
    render() {
        return(
            <div>
                <h2> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email} required
                    />
                    <label>Password</label>
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required

                    />
                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        )
    }


}
export default SignInComponent
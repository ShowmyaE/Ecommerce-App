import { Component } from "react";
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import PasswordStrengthBar from 'react-password-strength-bar';
import validator from 'validator'
import {
    LoginContainer,
    LoginFormContainer,
    HeadingContainer,
    Heading,
    InputLabelContainer,
    Label,
    InputBox,
    CheckBoxLabelContainer,
    LoginButton,
    CheckBox,
    ErrorMsg,
    ParaElement,
    SignupElement
} from "./styledComponents";

class SignUp extends Component {
    state = { email: '', createPassword: '', confirmPassword: '', showErrorMsg: false, errorMsg: '', showEmailErrorMsg: false, showPasswordErrorMsg: false }

    onChangeEmail = event => {
        console.log("EMAIL")
        this.setState({ email: event.target.value })
    }

    onChangeCreatePassword = event => {
        this.setState({ createPassword: event.target.value })
    }

    onChangeConfirmPassword = event => {
        this.setState({ confirmPassword: event.target.value })
        const { createPassword, confirmPassword } = this.state
        console.log(createPassword, confirmPassword)
        if (createPassword !== confirmPassword) {
            this.setState({ showPasswordErrorMsg: true, errorMsg: "password doesn't match" })
        }
    }

    onChangeShowPassword = () => {
        const PasswordEl = document.getElementById('password')
        if (PasswordEl.type === "password") {
            PasswordEl.type = 'text'
        }
        else {
            PasswordEl.type = 'password'
        }
    }

    submitForm = async event => {
        event.preventDefault()
        this.setState({ showEmailErrorMsg: false, errorMsg: '' })
        console.log("submit")
        const { email, createPassword } = this.state

        if (validator.isEmail(email)) {
            const userDetails = { email, password: createPassword }
            const url = 'https://appointmentback.onrender.com/signUp '
            const options = {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok === true) {
                this.onSubmitSucess(data.jwt_token)
            }
            else {
                this.onSubmitFailure(data.error_msg)
            }
        } else {
            this.setState({ showEmailErrorMsg: true, errorMsg: 'enter a valid email' })
        }

    }

    onSubmitSucess = jwtToken => {
        const { history } = this.props
        Cookies.set('jwt_token', jwtToken, { expires: 30, path: '/' })
        history.replace('/')
    }
    onSubmitFailure = errorMsg => {
        this.setState({ showErrorMsg: true, errorMsg })
    }


    render() {
        const { email, createPassword, confirmPassword, showErrorMsg, errorMsg, showEmailErrorMsg, showPasswordErrorMsg } = this.state

        const jwtToken = Cookies.get('jwt_token')
        // if (jwtToken !== undefined) {
        //     return <Navigate to='/signUp' />
        // }
        return (
            <LoginContainer >
                <LoginFormContainer
                    onSubmit={this.submitForm}>
                    <HeadingContainer >
                        <Heading>SignUp</Heading>
                    </HeadingContainer>
                    <InputLabelContainer>
                        <Label htmlFor="username">Email</Label>
                        <InputBox
                            id="email"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={this.onChangeEmail} />
                    </InputLabelContainer>
                    {showEmailErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                    <InputLabelContainer>
                        <Label htmlFor="password">Create Password</Label>
                        <InputBox
                            id="createPassword"
                            type="password"
                            placeholder=" Create password"
                            value={createPassword}
                            onChange={this.onChangeCreatePassword} />
                    </InputLabelContainer>
                    <PasswordStrengthBar password={createPassword} />
                    <InputLabelContainer>
                        <Label htmlFor="password">Confirm Password</Label>
                        <InputBox
                            id="confirmPassword"
                            type="password"
                            placeholder=" Confirm password"
                            value={confirmPassword}
                            onChange={this.onChangeConfirmPassword} />
                    </InputLabelContainer>
                    {showPasswordErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

                    <LoginButton type="submit" onClick={this.submitForm}>SignUp</LoginButton>
                    {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

                    <ParaElement>Don't have an account?
                        <Link to="/">
                            <SignupElement>Login</SignupElement>
                        </Link>
                    </ParaElement>
                </LoginFormContainer>
            </LoginContainer>
        )

    }
}

export default SignUp
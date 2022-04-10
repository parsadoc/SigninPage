import React, { useState } from 'react';
import './login.scss';
import logo from '../assets/images/logo.png';


const SignInPage = () => {
const [state,setState] = useState<{
    login?: boolean,
    signUpForm?: {
        name?: string,
        email?: string,
        password?: string
    },
    signInForm?: {
        email?: string,
        password?: string
    }
}>({
    login: false,
    signUpForm: {
        name: "",
        email: "",
        password: ""
    },
    signInForm: {
        email: "",
        password: ""
    }
});

    return (
        <div className="login">
            <div className={`login__colored-container ${state.login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
            <div className={`login__welcome-back ${state.login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                <div className="login__welcome-back__logo-container">
                <img className="login__welcome-back__logo-container--image" src={logo} alt="Budwriter" />
                    Exchange X
                </div>
                <div className="login__welcome-back__main-container">
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Welcome Back!
                        </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            To keep sharing your work with us, please log in.
                        </span>
                    </div>
                    <div onClick={() => {
                        setState({
                            login: !state.login
                        });
                    }} className="login__welcome-back__main-container__button-container">
                        Sign In
                    </div>
                </div>
            </div>
            <div className={`login__create-container ${state.login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                Create Account
               
                <span className="login__create-container--info-text">or use email for your registration</span>
                <div className="login__create-container__form-container">
                    <form className="login__create-container__form-container__form" onSubmit={(e) => {
                        e.preventDefault();
                        signUp();
                    }}>
                        <input
                            className="login__create-container__form-container__form--name"
                            type="text"
                            placeholder="Name"
                            value={state.signUpForm?.name}
                            onChange={(value) => setState({
                                signUpForm: {
                                    name: value.target.value,
                                    email: state.signUpForm?.email,
                                    password: state.signUpForm?.password
                                }
                            })}
                            required />
                        <input
                            className="login__create-container__form-container__form--email"
                            type="email"
                            placeholder="Email"
                            value={state.signUpForm?.email}
                            onChange={(value) => setState({
                                signUpForm: {
                                    email: value.target.value,
                                    name: state.signUpForm?.name,
                                    password: state.signUpForm?.password
                                }
                            })}
                            required />
                        <input
                            className="login__create-container__form-container__form--password"
                            type="password"
                            placeholder="Password"
                            value={state.signUpForm?.password}
                            onChange={(value) => setState({
                                signUpForm: {
                                    password: value.target.value,
                                    name: state.signUpForm?.name,
                                    email: state.signUpForm?.email
                                }
                            })}
                            required />
                        <button
                            className="login__create-container__form-container__form--submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className={`login__login-container ${!state.login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                <div className="login__login-container__logo-container">
                   
                    Sign in
                </div>
                <div className="login__login-container__main-container">
                    <div className="login__login-container__main-container__form-container">
                        <form className="login__login-container__main-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            signIn();
                        }}>
                            <input
                                className="login__login-container__main-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={state.signInForm?.email}
                                onChange={(value) => setState({
                                    signInForm: {
                                        email: value.target.value,
                                        password: state.signInForm?.password
                                    }
                                })}
                                required />
                            <input
                                className="login__login-container__main-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={state.signInForm?.password}
                                onChange={(value) => setState({
                                    signInForm: {
                                        password: value.target.value,
                                        email: state.signInForm?.email
                                    }
                                })}
                                required />
                            <button
                                className="login__login-container__main-container__form-container__form--submit">
                                Sign In
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`login__hello-container ${!state.login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                <div className="login__welcome-back__main-container__text-container">
                    <span className="login__welcome-back__main-container__text-container--title">
                        Hello, stranger!
                        </span>
                    <span className="login__welcome-back__main-container__text-container--secondary">
                        Enter your personal details and start your own portfolio!
                    </span>
                </div>
                <div onClick={() => {
                    setState({
                        login: !state.login
                    });
                }} className="login__welcome-back__main-container__button-container">
                    Sign Up
                </div>
            </div>
        </div>
    );

   function signUp() {
        setState({
            signUpForm: {
                name: "",
                password: "",
                email: ""
            }
        });
    }

    function signIn() {
       // props.history.push("/dashboard");
       setState({
            signInForm: {
                password: "",
                email: ""
            }
        });
    }
}


export default SignInPage;
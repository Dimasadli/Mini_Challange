import React, { Component } from 'react';
import './LoginPage.css'
import Account from '../../../Account/Account';
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                email: '',
                password: ''
            }
        }
        this.loginChange = this.loginChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        // this.passwordLogin = this.passwordLogin.bind(this)
        // this.emailLogin = this.emailLogin.bind(this)
    }
    loginChange(event) {
        let loginFormNew = { ...this.state.loginForm }
        loginFormNew[event.target.name] = event.target.value
        this.setState({
            loginForm: loginFormNew
        })
    }
    handleLogin(event) {
        event.preventDefault()
        if (Account[this.state.loginForm.email]) {
            if (Account[this.state.loginForm.email] === this.state.loginForm.password) {
                this.setState({
                    loginForm: {
                        email: '',
                        password: ''
                    }
                })
                alert('Anda Berhasil Login')
                this.props.history.push('/product')
            }
            else {
                alert('Email/Password Anda salah')
            }
        } else {
            alert('Email/Password Anda salah')
            this.setState({
                loginForm: {
                    email: '',
                    password: ''
                }
            })
        }
    }
    // emailLogin(event) {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // passwordLogin(event) {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    render() {
        return (
            <div className='login-page'>
                <div className='login-page-header'>
                    <div className='login-page-title'>
                        <h1>Welcome back and sign in your account</h1>
                    </div>
                    <form action="get" className='login-form'>
                        <label className='login-form-label' htmlFor="email">Email</label>
                        <input className='login-form-input' type="email" placeholder='Your Email Adress' onChange={this.loginChange} value={this.state.loginForm.email} name='email' />
                        <label className='login-form-label' htmlFor="password" >Password</label>
                        <input className='login-form-input' type={this.props.typePassword} placeholder='Your Password' onChange={this.loginChange} value={this.state.loginForm.password} name='password' />
                        <span><img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/view.png" onClick={this.props.togglePassword} alt="" /></span>
                        <div className='login-form-checkbox'>
                            <input type="checkbox" id='remember-me' />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="btn btn-dark btn-login" onClick={this.handleLogin}>Log in</button>
                    </form>
                    <p id="forgot-password">Forgot your password? <a className='anchor'>Click Here</a></p>
                </div>
                <div className='login-page-footer'>
                    <p >Don't have an account? <a className='anchor' onClick={this.props.onChangeLogin}>Sign up Here</a></p>
                </div>
            </div>
        );
    }
}



export default withRouter(LoginPage);

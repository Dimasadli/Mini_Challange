import React, { Component } from 'react';
import './SignUpPage.css';
import { withRouter } from "react-router-dom";
import Account from '../../../Account/Account';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpForm: {
                name: '',
                email: '',
                password: ''
            }
        }
        // this.nameSignUp = this.nameSignUp.bind(this)
        // this.emailSignUp = this.emailSignUp.bind(this)
        // this.passwordSignUp = this.passwordSignUp.bind(this)
        this.signUpChange = this.signUpChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    // nameSignUp(event) {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // emailSignUp(event) {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // passwordSignUp(event) {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    signUpChange(event) {
        let signUpFormNew = { ...this.state.signUpForm }
        signUpFormNew[event.target.name] = event.target.value
        this.setState({
            signUpForm: signUpFormNew
        })
    }
    handleSignUp(event) {
        event.preventDefault()
        if (this.state.signUpForm.password.length < 8) {
            alert('Password yang anda masukkan kurang dari 8 karakter')
        }
        else {
            if (Account[this.state.signUpForm.email]) {
                alert('Email Telah Terdaftar')
            }
            else {
                Account[this.state.signUpForm.email] = this.state.signUpForm.password
                alert('Anda Berhasil Sign Up')
                this.props.history.push('/product')
            }
        }
    }
    render() {
        return (
            <div className='signup-page'>
                <div className='signup-page-header'>
                    <div className='signup-page-title'>
                        <h1>Welcome to kahf and let's join</h1>
                    </div>
                    <form action="get" className='signup-form'>
                        <label className='signup-form-label' htmlFor="name">Name</label>
                        <input onChange={this.signUpChange} className='signup-form-input' type="text" placeholder='Your Name' value={this.state.signUpForm.name} name='name' />
                        <label className='signup-form-label' htmlFor="email">Email</label>
                        <input onChange={this.signUpChange} className='signup-form-input' type="email" placeholder='Your Email Adress' value={this.state.signUpForm.email} name='email' />
                        <label className='signup-form-label' htmlFor="password" >Password</label>
                        <input onChange={this.signUpChange} className='signup-form-input' type={this.props.typePassword} placeholder='Your Password' value={this.state.signUpForm.password} name='password' />
                        <span><img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/view.png" onClick={this.props.togglePassword} alt="" /></span>
                        <p id="already-singup">By clicking this button, you agree to Kahf's</p>
                        <button onClick={this.handleSignUp} className="btn btn-dark btn-signup">Register</button>
                    </form>
                </div>
                <div className='signup-page-footer'>
                    <p >Already have an account? <a onClick={this.props.onChangeLogin} className='anchor'>Click Here</a></p>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUpPage);

import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typePassword: 'password',
            togglePassword: true,
            isLogin: true
        }
    }
    togglePassword = () => {
        if (this.state.togglePassword) {
            this.setState({
                typePassword: 'text',
                togglePassword: !this.state.togglePassword
            })
        }
        else {
            this.setState({
                typePassword: 'password',
                togglePassword: !this.state.togglePassword
            })
        }
    }
    onChangeLogin = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='img-page'>
                    <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg" alt="" />
                </div>
                {
                    this.state.isLogin ?
                        <LoginPage
                            onChangeLogin={this.onChangeLogin}
                            typePassword={this.state.typePassword}
                            togglePassword={this.togglePassword} />
                        :
                        <SignUpPage
                            onChangeLogin={this.onChangeLogin}
                            typePassword={this.state.typePassword}
                            togglePassword={this.togglePassword}
                        />
                }

            </div>
        );
    }
}
export default Main;

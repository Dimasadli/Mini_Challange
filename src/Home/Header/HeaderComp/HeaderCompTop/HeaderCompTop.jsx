import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class HeaderCompTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 0
        };
    }
    render() {
        return (
            <div className="d-flex header-top">
                <div className='header-left header-top' ></div>
                <div className='header-title header-top'>
                    <p >NEW: Kahf Gentle Exfoliating Face Scrub</p>
                </div>
                <div className='d-flex justify-content-end header-cart header-top'>
                    <div className='header-cart-trolley'>
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/group-1.png" alt="" />
                        <Link className='logo-cart' to='/cart'>&#40;{this.props.totalOrder.length}&#41; </Link>
                        <span> | </span>
                    </div>
                    <div className='header-cart-heart'>
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/path-1.png" alt="" />
                        <Link className='logo-cart' >&#40;{this.state.order}&#41;</Link>
                        <span> | </span>
                    </div>
                    <div className='header-cart-login'>
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/profile-1.png" alt="" />
                        <p><Link className='logo-cart' to='/my-account'>LOGIN</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}



export default HeaderCompTop;

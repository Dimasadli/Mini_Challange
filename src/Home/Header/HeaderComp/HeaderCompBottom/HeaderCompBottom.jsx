import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

class HeaderCompBottom extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between header-bottom">
                <div className="header-bottom-logo">
                    <img src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png" alt="" />
                </div>
                <div className="header-bottom-link">
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/product'>Shop</Link>
                    <Link className='link' to='/brand'>Brand</Link>
                    <Link className='link' to='/kahf-program'>Kahf Program</Link>
                    <Link className='link' to='/discovery'>Discovery</Link>
                </div>
                <div className='search'>
                    <input className='form-control' type="text" name="" id="" placeholder='Type to search' />
                    <span><VscSearch /></span>
                </div>
            </div>
        );
    }
}

export default HeaderCompBottom;

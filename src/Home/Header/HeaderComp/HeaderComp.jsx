import React, { Component } from 'react';
import './HeaderComp.css'
import HeaderCompTop from './HeaderCompTop/HeaderCompTop';
import HeaderCompBottom from './HeaderCompBottom/HeaderCompBottom';



class HeaderComp extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <HeaderCompTop
                    totalOrder={this.props.totalOrder} />
                <HeaderCompBottom />
            </div>
        );
    }
}

export default HeaderComp;

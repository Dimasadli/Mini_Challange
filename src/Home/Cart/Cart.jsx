import React, { Component } from 'react';
import './Cart.css'
import CartDetail from './CartDetail/CartDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="cart-title">
                    <h1>Shopping Cart</h1>
                </div>
                {
                    this.props.totalOrder.map((el, id) => {
                        return (
                            <CartDetail
                                key={id}
                                data={el}
                            />
                        )
                    })
                }
                <div className='go-back-shopping'>
                    <p><Link className='go-back-shopping' to='/product'><span>&larr;</span> Go back to Shopping</Link></p>
                </div>
            </div>
        );
    }
}

export default Cart;

// this.props.totalOrder
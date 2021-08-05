import React, { Component } from 'react';

class CartDetail extends Component {
    render() {
        return (
            <div key={this.props.key}>
                <div className="cart-detail">
                    <img src={this.props.data.image} alt="" />
                    <span>{this.props.data.name}</span>
                    <hr />
                </div>
            </div>
        );
    }
}

export default CartDetail;

import React, { Component } from 'react';

class CardProduct extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.goCart(this.props.data)
    }
    render() {
        return (
            <div key={this.props.id} className='card-wrapper'>
                <div className="img-product">
                    <img src={this.props.data.image} alt="" />
                </div>
                <div className="title-wrapper">
                    <p>{this.props.data.name}</p>
                </div>
                <div className='button-wrapper'>
                    <button onClick={this.handleClick} className='btn btn-dark add'>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;

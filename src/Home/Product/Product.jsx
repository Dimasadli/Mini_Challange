import React, { Component } from 'react';
import CardProduct from './CardProduct/CardProduct';
import axios from 'axios';
/// API
import API from '../../API/API';

/// Style
import './Product.css'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            orderEval: {}
        }
    }
    handleClick = (value) => {
        this.setState({
            orderEval: value
        }, this.postDataToAPI
        )
    }
    postDataToAPI = () => {
        axios.post('https://paragon-training-api.herokuapp.com/cart', this.state.orderEval)
            .then((res) => {
                this.props.getCart()
            }, (err) => {
                console.log('errornya: ', err)
            })
    }
    componentDidMount() {
        const dB = new API()
        dB.getAPI().then(res => {
            this.setState({
                post: res.data
            })
        })
    }
    render() {
        return (
            <div className="container product-wrapper">
                {
                    this.state.post.map((el, idx) => {
                        return (
                            <CardProduct
                                goCart={this.handleClick}
                                data={el}
                                id={idx}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Product;

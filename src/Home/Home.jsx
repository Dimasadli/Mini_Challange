import React, { Component, Fragment } from 'react';
import HeaderComp from './Header/HeaderComp/HeaderComp';
import Product from './Product/Product';
import Main from './Main/Main';
import Cart from './Cart/Cart';
import LandingPage from './LandingPage/LandingPage';
//style
import './LandingPage/LandingPage.css'
import './Home.css'

/// react-dom
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalOrder: []
        }
    }
    componentDidMount() {
        this.getCart()
    }
    /// get API untuk Cart
    getCart = () => {
        axios.get('https://paragon-training-api.herokuapp.com/cart').then(res => {
            this.setState({
                totalOrder: res.data
            })
        })
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <div>
                        <HeaderComp
                            totalOrder={this.state.totalOrder} />
                    </div>
                    <Route path='/' exact ><LandingPage textPage='Home Page' /></Route>
                    <Route path='/brand'><LandingPage textPage='Brand Page' /></Route>
                    <Route path='/product'><Product
                        getCart={this.getCart} />
                    </Route>
                    <Route path='/kahf-program'><LandingPage textPage='Kahf Program Page' /></Route>
                    <Route path='/discovery'><LandingPage textPage='Discovery Page' /></Route>
                    <Route path='/my-account' ><Main /></Route>
                    <Route path='/cart'><Cart
                        totalOrder={this.state.totalOrder} />
                    </Route>
                </Fragment>
            </Router>
        );
    }
}

export default Home;

    // <div>
    //     <HeaderComp
    //         totalOrder={this.state.totalOrder} />
    //     {/* <Product
    //         /> */}
    //     {/* <Main /> */}
    //     <Cart
    //          />
    // </div>
import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div className='container landing-page'>
                <h1>Anda Sedang Berada di {this.props.textPage}</h1>
            </div >
        );
    }
}

export default LandingPage;

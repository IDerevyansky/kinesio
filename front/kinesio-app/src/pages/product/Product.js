import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    render(){
        return(
            <p>{this.props.text}</p>
        )
    }
}

export default Product;
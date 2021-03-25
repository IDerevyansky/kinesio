import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Button.css";


class Button extends Component  {
    render(){

        let click;

        if(typeof this.props.statusPopUp === 'function'){
            click = ()=>{this.props.statusPopUp(true)};
        }else{
            click = ()=>{};
        }

        return(
            <Link to={this.props.link?this.props.link:''} rel="noopener noreferrer" >
                <div onClick={click} className="btn">{this.props.text.toUpperCase()}</div>
            </Link>
        )

    }
}

export default Button;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Button.css";


class Button extends Component  {
    render(){
        return(
            <Link to={this.props.link} rel="noopener noreferrer" >
                <div onClick={()=>{this.props.statusPopUp(true)}} className="btn">{this.props.text.toUpperCase()}</div>
            </Link>
        )
    }
}

export default Button;
import React, { Component } from 'react';

import "./Button.css";


class Button extends Component  {
    render(){
        return(
            <div onClick={()=>{this.props.statusPopUp(true)}} className="btn">{this.props.text.toUpperCase()}</div>
        )
    }
}

export default Button;
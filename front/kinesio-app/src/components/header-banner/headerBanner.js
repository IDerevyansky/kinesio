import React, { Component } from "react";

import Button from '../button/Button';

import "./header-banner.css";

class HeaderBanner extends Component{
    render(){
        return(

            <div className="content-box">
                <div className="img-box"></div>
                <div className="text-box">

                    <div className="cont-text container">
                        <h1>{this.props.title}</h1>
                        <p className="m16-t m16-b">{this.props.text}</p>
                        <Button statusPopUp={this.props.statusPopUp} text="Записаться"/>
                    </div>
                   
                </div>
            </div>

        );
    }
}

export default HeaderBanner;
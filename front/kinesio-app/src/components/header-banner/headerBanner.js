import React, { Component } from "react";

import "./header-banner.css";

class HeaderBanner extends Component{
    render(){
        return(

            <div className="content-box">
                <div className="img-box"></div>
                <div className="text-box">

                    <div className="cont-text">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                    </div>
                   
                </div>
            </div>

        );
    }
}

export default HeaderBanner;
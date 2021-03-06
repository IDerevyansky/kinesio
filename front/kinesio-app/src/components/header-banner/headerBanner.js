import React, { Component } from "react";

import Button from '../button/Button';

import "./header-banner.css";

class HeaderBanner extends Component{
    render(){
        return(

            <div className="content-box ">
                <div className="img-box h-full"></div>
                <div className="text-box">

                    <div className="cont-text margin-container m72-t m72-b">
                        <h1 dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
                        <p className="m16-t m16-b" dangerouslySetInnerHTML={{__html:this.props.text}}></p>
                        <Button statusPopUp={this.props.statusPopUp} text="Записаться"/>
                    </div>
                   
                </div>
            </div>

        );
    }
}

export default HeaderBanner;
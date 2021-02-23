import React, { Component } from 'react';
import "./CardNews.css";

class CardNews extends Component {

    render(){

        var style ={
            background:"url("+this.props.bg+")",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"auto 200%"
        };

        return(

            <div className="CardNews" style={style}>

                <div className="Gradient-card-news">
                    <div className="text-content">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.text_body}</p>
                    </div>
                </div>

            </div>
            
        );


    }

}

export default CardNews;
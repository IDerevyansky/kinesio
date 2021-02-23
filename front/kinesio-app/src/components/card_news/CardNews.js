import React, { Component } from 'react';
import "./CardNews.css";

class CardNews extends Component {

    render(){


        return(

            <div className="CardNews">

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
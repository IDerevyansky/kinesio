import React, { Component } from 'react';
import "./Card.css";


class Card extends Component {
   
    render(){
        return(

            <>

                <div className="card">

                    <div className="discription_card">

                        <div className="m24-b">
                            <h3>{this.props.title}</h3>
                        </div>

                        <div className="text_card">
                            <p>{this.props.text}</p>
                        </div>

                    </div>
                    
                            
                    <div className="card_more">
                        <p  onClick={()=>{this.props.statusPopUp(true)}} className="more">{this.props.appointment}</p>
                    </div>

                </div>
            
            </>

        );
    }
}

export default Card;
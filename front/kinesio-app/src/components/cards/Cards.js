import React, { Component } from 'react';
import "./Cards.css";


class Cards extends Component {
   
    render(){
        return(

            <>

                <div className="cards">

                    <div className="discription_card">

                        <div className="m24-b">
                            <h3>{this.props.title}</h3>
                        </div>

                        <div className="text_cards">
                            <p>{this.props.text_body}</p>
                        </div>

                    </div>
                    
                            
                    <div className="cards_more">
                        <p  onClick={()=>{this.props.statusPopUp(true)}} className="more">{this.props.appointment}</p>
                    </div>

                </div>
            
            </>

        );
    }
}

export default Cards;
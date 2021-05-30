import React, { Component } from 'react';

import './question.css';


class Question extends Component{

    constructor(props){
        super(props);
        this.state = {
            item_more:false
        }

    }


    counter(q) {
    
        var item_more = document.getElementsByClassName('body_more');

        if(this.state.item_more == true){

            this.setState({item_more:false});
            document.getElementById(q).style.transform = "rotate(0deg)";
            document.getElementById(q).style.transition = "500ms";

            item_more[q].style.display="none";
            
        }else{

            this.setState({item_more:true});
            document.getElementById(q).style.transform = "rotate(180deg)";
            document.getElementById(q).style.transition = "500ms";
  
            item_more[q].style.display="block";

        }

    }

    render(){

        return(
            

            <>
                <div className="box-item">

                    <div className="box_title" onClick={()=>{this.counter(this.props.id)}}>

                        <div className="title_more">
                            <h3 dangerouslySetInnerHTML={{__html:this.props.title}}></h3>
                        </div>

                        <div id={this.props.id} className="icon_more" ></div>

                    </div>
                    
                    <div className="body_more">
                        <p dangerouslySetInnerHTML={{__html:this.props.body_text}}></p>
                    </div>

                </div>
            </>


        )

    }

}

export default Question;
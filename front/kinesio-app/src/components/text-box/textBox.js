import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './text-box.css';

class TextBox extends Component {

    render(){

        

        return(
            <div className="margin-container container m-auto">


                <div className="container-text-box h-full">
                    <div className={ this.props.orientation === 'y'?'content-text-box-column':'content-text-box-row' }>
                        <div className={ this.props.orientation === 'y'?'title-text-box-column':'title-text-box-row' }>
                            <h2 dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
                        </div>
                        <div className= { this.props.orientation === 'y'?'textBody-text-box-column':'textBody-text-box-row' } >

                            <p dangerouslySetInnerHTML={{__html:this.props.text}} ></p>

                                <div className="m24-t">
                                    <Link to={this.props.link?this.props.link:''} className="more"><p>Подробнее</p></Link>
                                </div>
                        </div>
                    </div>    

                </div>


            </div>
           
        )
    }
}

export default TextBox;



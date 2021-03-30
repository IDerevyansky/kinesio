import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import './TextImgBox.css';

class TextImgBox extends Component {
    render(){
        return(
            <>
               
                    <h2 dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
           
                <p dangerouslySetInnerHTML={{__html:this.props.text}}></p>

                <div className="m24-t">
                     <Link to={this.props.link?this.props.link:''} className="more"><p>Подробнее</p></Link>
                </div>
                
                <div className="TextImgBox-img"></div> 

            </>
        )
    }
}

export default TextImgBox;
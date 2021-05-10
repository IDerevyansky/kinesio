import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import './TextImgBox.css';

class TextImgBox extends Component {
    render(){
        return(

            <div className="container m-auto">

                    <div className="TextImgBox-content h-full m72-b m72-t">

                    <div className="TextImgBox-text margin-container"> 

                        <h2 className="m32-b" dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
                        <p dangerouslySetInnerHTML={{__html:this.props.text}}></p>

                        <div className="m24-t">
                            <Link to={this.props.link?this.props.link:''} className="more"><p>Подробнее</p></Link>
                        </div>

                    </div>

                    <div className="TextImgBox-img"></div> 

                    </div>

            </div>

        )
    }
}

export default TextImgBox;
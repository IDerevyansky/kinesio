import React, {Component} from 'react';
import './News.css';

class News extends Component {
    render(){
        return(
            <p>{this.props.text}</p>
        )
    }
}

export default News;
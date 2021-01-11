import React, {Component} from 'react';
import './About.css';

class About extends Component {

    render(){
        return(
           <p>{this.props.text}</p>
        )
    }

}

export default About;
import React, { Component } from 'react';

import Question from './question';
import './questions.css';

class Questions extends Component {
    render(){

        return(

            <div className="container margin-container m-auto h-full m72-t m72-b">
                <Question/>
            </div>
            
        )

    }
}

export default Questions;
import React from 'react';
import { useParams } from 'react-router-dom';

import './NewsView.css';


const NewsView = (props) => {
    let { id } = useParams();
    // console.log(id);

    return(
    <p>{props.text+ ' ' + id}</p>
    );
}


export default NewsView;
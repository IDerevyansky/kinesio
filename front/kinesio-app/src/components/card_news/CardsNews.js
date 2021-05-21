import React, { Component } from "react";
import { Link } from 'react-router-dom';

import CardNews from "./CardNews";
import "./CardsNews.css";


class CardsNews extends Component {


render(){

    return(

        <>

            <div className="container m-auto h-full m72-t m72-b">

                    <div className="CardsNews">

                                <div className="card-news-one">

                                    <CardNews
                                    bg="https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
                                    title="Title long very long"
                                    text_body="Text text text text text text text text text"
                                    />

                                </div>
                        
                                <div className="card-news-two">

                                    <CardNews
                                    bg="https://images.unsplash.com/photo-1617074075610-3afc101babe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
                                    title="Title long very long"
                                    text_body="Text text text text text text text text text"
                                    />

                                </div>


                                <div className="card-news-three">

                                    <CardNews
                                    bg="https://images.unsplash.com/photo-1613389423867-df8386d13a64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
                                    title="Title long very long"
                                    text_body="Text text text text text text text text text"
                                    />

                                </div>

                                <div className="card-news-four">

                                    <CardNews
                                    bg="https://images.unsplash.com/photo-1615238168944-6ed817aeb4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
                                    title="Title long very long"
                                    text_body="Text text text text text text text text text"
                                    />

                                </div>

                                <div className="card-news-five">

                                    <CardNews
                                    bg="https://images.unsplash.com/photo-1612296727166-b44f0be45463?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70"
                                    title="Title long very long"
                                    text_body="Text text text text text text text text text"
                                    />

                                </div>


                    </div>

            </div>

        </>

    )
    
}
    

      

    

}

export default CardsNews;
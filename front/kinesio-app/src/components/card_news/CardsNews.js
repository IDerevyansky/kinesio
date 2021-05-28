import React, { Component } from "react";
import { Link } from 'react-router-dom';

import CardNews from "./CardNews";
import "./CardsNews.css";


class CardsNews extends Component {


render(){
    
let CardsNews_Post = this.props.content.map(
    (CardsNews_Post, i)=>{ 

      return(

        <Link to={CardsNews_Post.url} rel="noopener noreferrer">
          <CardNews
          bg={CardsNews_Post.img}
          title={CardsNews_Post.title}
          text_body={CardsNews_Post.text_body}
          />
        </Link>

      )

    });






    return(

        <>

            <div className="container m-auto h-full m72-t m72-b">
                
                <div className="margin-container">

                    <h2 className="m32-b" dangerouslySetInnerHTML={{__html:this.props.title}}></h2>

                            <div className="box-cards-scroll">

                                    <div className="CardsNews">

                                                <div className="card-news-one">

                                                    {CardsNews_Post[0]}

                                                </div>
                                        
                                                <div className="card-news-two">

                                                    {CardsNews_Post[1]}

                                                </div>


                                                <div className="card-news-three">

                                                    {CardsNews_Post[2]}

                                                </div>

                                                <div className="card-news-four">

                                                    {CardsNews_Post[3]}

                                                </div>

                                                <div className="card-news-five">

                                                    {CardsNews_Post[4]}

                                                </div>


                                    </div>

                            </div>

                        <div className="center-text-in-block">
                            <Link  to={'/news'} rel="noopener noreferrer" ><p className="more">{this.props.more}</p></Link>
                        </div>

                </div> 

            </div>

        </>

    )
    
}
    

      

    

}

export default CardsNews;
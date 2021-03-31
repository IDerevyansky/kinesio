import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Card from "./Card";
import './Cards.css';

const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Cards extends Component {


    render(){

        // let Cards=this.state.section_three_content.map(
            
        //     (Cards, i)=>{
      
        //      return(
        //       <Card
        //         key={i}
        //         title={Cards.title}
        //         text_body={Cards.text_body}
        //         statusPopUp={this.props.statusPopUp}
        //         appointment={this.state.appointment} 
        //       />
        //      )
      
        //     });

        return(


            <div className="container m-auto h-full">

                <div className="">

                      <Card
                      title="Руки ножницы"
                      text="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. 
                      Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? 
                      Как бы то ни было, он быстро разгадает ее."
                      appointment="Записаться"
                      statusPopUp={this.props.statusPopUp}
                      />

                      <Card
                      title="Руки ножницы"
                      text="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. 
                      Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? 
                      Как бы то ни было, он быстро разгадает ее."
                      appointment="Записаться"
                      statusPopUp={this.props.statusPopUp}
                      />

                      <Card
                      title="Руки ножницы"
                      text="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. 
                      Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? 
                      Как бы то ни было, он быстро разгадает ее."
                      appointment="Записаться"
                      statusPopUp={this.props.statusPopUp}
                      />

                      <Card
                      title="Руки ножницы"
                      text="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. 
                      Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? 
                      Как бы то ни было, он быстро разгадает ее."
                      appointment="Записаться"
                      statusPopUp={this.props.statusPopUp}
                      />

                </div>
              

            </div>


        )
    }
}

export default Cards;
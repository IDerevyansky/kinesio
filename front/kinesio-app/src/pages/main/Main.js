import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'


import HeaderBanner from "../../components/header-banner/headerBanner";
import TextBox from "../../components/text-box/textBox";
// import Cards from "../../components/card/Cards";
// import CardNews from "../../components/card_news/CardNews";

// import CallBack from '../../components/callBack/callBack';


const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }

  componentDidMount = async () => {

    const respons = await fetch(url).then(pages => pages.json());
    this.setState({

    });
    
  }


  render(){
    

    return(

    <>

        <HeaderBanner 
        statusPopUp={this.props.statusPopUp}
        title="Вам достаточно знать номер телефона данного человека."
        text="Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат. Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат."
        />
          
        
        <TextBox orientation="x"/>

      
    </>

    )
  }
}


export default Main;

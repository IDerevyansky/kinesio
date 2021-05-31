import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'


import HeaderBanner from "../../components/header-banner/headerBanner";
import TextBox from "../../components/text-box/textBox";
import TextImgBox from "../../components/text-img-box/TextImgBox";
// import Card from "../../components/card/Card";
import Cards from "../../components/card/Cards";
import CardsNews from "../../components/card_news/CardsNews";
import Questions from "../../components/questions/questions";

// import CallBack from '../../components/callBack/callBack';


const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      header_banner_title:"",
      header_banner_content:"",

      whatIs_title:"",
      whatIs_content:"",

      about_title:"",
      about_content:"",

      news_title:"",
      news_content:[],
      
      question_title:"",
      question_content:[]
    }
  }

  componentDidMount = async () => {

    const respons = await fetch(url).then(pages => pages.json());
    // console.log(respons.pages.main.section.Body.section_two); 
    this.setState({

      header_banner_title:respons.pages.main.section.MainBanner.h1,
      header_banner_content:respons.pages.main.section.MainBanner.p,

      whatIs_title:respons.pages.main.section.Body.section_one.section_one_title,
      whatIs_content:respons.pages.main.section.Body.section_one.section_one_body_text,

      about_title:respons.pages.main.section.Body.section_two.section_two_title,
      about_content:respons.pages.main.section.Body.section_two.section_two_body_text,

      news_title:respons.pages.main.section.Body.section_four.section_four_title,
      news_content:respons.pages.main.section.Body.section_four.content,

      question_title:respons.pages.main.section.Body.section_five.section_five_title,
      question_content:respons.pages.main.section.Body.section_five.content,

      more:respons.pages.main.section.options.link_more_ru

    });
    
  }


  render(){
    

    return(

    <>

        <HeaderBanner 
        statusPopUp={this.props.statusPopUp}
        title={this.state.header_banner_title}
        text={this.state.header_banner_content}
        />
          
        

          <TextBox
          orientation="x"
          link="/whatIs"
          title={this.state.whatIs_title}
          text={this.state.whatIs_content}
          />

        <div style={{backgroundColor:'#F5F3ED'}}>

              <TextImgBox 
              link="/about"
              title={this.state.about_title}
              text={this.state.about_content}
              />

        </div>

        <Cards
          statusPopUp={this.props.statusPopUp}
          title="Темы для работы"
          more={this.state.more}
        />
        
        <CardsNews
          title={this.state.news_title}
          more={this.state.more}
          content={this.state.news_content}
        />

        <Questions
        title={this.state.question_title}
        content={this.state.question_content}
        />

    </>

    ) 
  }
}


export default Main;

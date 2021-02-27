import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

import Card from "../../components/card/Card";
import CardNews from "../../components/card_news/CardNews";

// import CallBack from '../../components/callBack/callBack';


const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataMainBanner:"",
      section_one_title:"",
      section_one_body_text:"",
      section_two_title:"",
      section_two_body_text:"",
      section_three_title:"",
      section_three_content:[],
      section_four_title:"",
      section_four_content:[],
      link_more_ru:"",
      appointment:""
    }
  }

  componentDidMount = async () => {

    // const respons = fetch(url, {method:"GET"}).then(res => res.json()).then(data => data.pages);
    const respons = await fetch(url).then(pages => pages.json());
    this.setState({
      dataMainBanner:respons.pages.main.section.MainBanner,
      section_one_title:respons.pages.main.section.Body.section_one.section_one_title,
      section_one_body_text:respons.pages.main.section.Body.section_one.section_one_body_text,
      section_two_title:respons.pages.main.section.Body.section_two.section_two_title,
      section_two_body_text:respons.pages.main.section.Body.section_two.section_two_body_text,
      section_three_title:respons.pages.main.section.Body.section_three.section_three_title,
      section_three_content:respons.pages.main.section.Body.section_three.content,
      section_four_title:respons.pages.main.section.Body.section_four.section_four_title,
      section_four_content:respons.pages.main.section.Body.section_four.content,
      link_more_ru:respons.pages.main.section.options.link_more_ru,
      appointment:respons.pages.main.section.options.appointment
    });
    // console.log(this.state.section_three_content[0].title);
  }


  render(){

    let CardsNews = this.state.section_four_content.map(
      (CardsNews, i)=>{ 

        return(

          <Link to={CardsNews.url} rel="noopener noreferrer">
            <CardNews
            bg={CardsNews.img}
            title={CardsNews.title}
            text_body={CardsNews.text_body}
            />
          </Link>

        )

      });

    let Cards=this.state.section_three_content.map(
      (Cards, i)=>{

       return(
        <Card
          key={i}
          title={Cards.title}
          text_body={Cards.text_body}
          statusPopUp={this.props.statusPopUp}
          appointment={this.state.appointment} 
        />
       )

      });

    return(
    <>
          <div className="contentBanner">

                <div className="bannerMainBox"></div>

                    <div className="textBannerContainer">

                            <div className="textMainBanner">

                              <h1>{this.state.dataMainBanner.h1}</h1>
                              <p>{this.state.dataMainBanner.p}</p>

                            </div>

                            <div onClick={()=>{this.props.statusPopUp(true)}} className="btnSingUpMainBanner"></div>

                    </div>

                

          </div>

        <div className="bodyMainContent">

          <div className="section">

            <div className="section-content body-margin">

                  <div className="section-title textRight m24-b">

                    <h2>{this.state.section_one_title}</h2> 

                  </div>
                  <div className="section-one__body-text" >

                  <div dangerouslySetInnerHTML={{__html: this.state.section_one_body_text}}></div>
                   
                    <Link  to={'/whatIs'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>

                  </div>

            </div>

          </div>




          <div className="section two">

              <div className="section-content revers center">
                
                <div className="section-two__text">

                  <div className="section-title m24-b">
                    <h2>{this.state.section_two_title}</h2>
                  </div>
                  
                  <div className="section-two__body-text">

                      <div dangerouslySetInnerHTML={{__html: this.state.section_two_body_text}}></div>

                      <Link  to={'/about'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>

                  </div>  

                  

                </div>

                <div className="section-two__img"></div>

              </div>

          </div>



          <div className="section three">

                <div className="section-content three">

                      <div className="section-title title-margin m24-b" dangerouslySetInnerHTML={{__html: this.state.section_three_title}}>
                        
                      </div>


                          <div className="section-three__card">

                            {Cards}

                          </div>


                      <div className="center-text-in-block">
                        <Link  to={'/product'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>
                      </div>

                      

                </div>

          </div>



          <div className="section four">

                <div className="section-content four">

                      <div className="section-title title-margin m24-b" dangerouslySetInnerHTML={{__html: this.state.section_four_title}}></div>

                    
                        

                              <div className="section-news-card">
                                  
                                  <div className="one-card-template">

                                    {CardsNews[0]}

                                  </div>

                                  <div className="two-card-template"> 

                                      {CardsNews[1]}

                                  </div>

                                  <div className="three-card-template">

                                      {CardsNews[2]}

                                  </div>

                                  <div className="four-card-template">
                                    
                                      {CardsNews[3]}

                                  </div>

                                  <div className="five-card-template">

                                      {CardsNews[4]} 

                                  </div>

                              </div>

                          
                            

                      <div className="center-text-in-block">
                        <Link  to={'/news'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>
                      </div>

                      

                </div>

          </div>

        </div>
    </>
    )
  }
}


export default Main;

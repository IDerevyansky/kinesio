import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

import Cards from "../../components/cards/Cards";

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
      link_more_ru:respons.pages.main.section.options.link_more_ru,
      appointment:respons.pages.main.section.options.appointment
    });
    // console.log(respons.pages.main.section.MainBanner.h1);
  }


  render(){

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

            <div className="section-content">

                  <div className="section-one__title m24-b">

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

                  <div className="section-two__title m24-b">
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

                      <div className="section-three__title m24-b">
                        <h2>Темы для работы</h2>
                      </div>

                      <div className="section-three__card ">

                        <Cards
                        title="Руки ножницы"
                        text_body="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? Как бы то ни было, он быстро разгадает ее."
                        statusPopUp={this.props.statusPopUp}
                        appointment={this.state.appointment} 
                        />

                        <Cards
                        title="Ноги ножницы"
                        text_body="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? "
                        statusPopUp={this.props.statusPopUp}
                        appointment={this.state.appointment}
                        />

                        <Cards
                        title="Руки из не положенного места"
                        text_body="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо.  Как бы то ни было, он быстро разгадает ее."
                        statusPopUp={this.props.statusPopUp}
                        appointment={this.state.appointment}
                        />

                        <Cards
                        title="Руки ножницы"
                        text_body="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? Как бы то ни было, он быстро разгадает ее."
                        statusPopUp={this.props.statusPopUp}
                        appointment={this.state.appointment} 
                        />

                        <Cards
                        title="Ноги ножницы"
                        text_body="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? "
                        statusPopUp={this.props.statusPopUp}
                        appointment={this.state.appointment}
                        />

                        <Cards
                        title="Руки из не положенного места"
                        text_body="Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо.  Как бы то ни было, он быстро разгадает ее."
                        statusPopUp={this.props.statusPopUp}
                        appointment={this.state.appointment}
                        />

                      </div>

                      
                      <div className="center-text-in-block">
                        <Link  to={'/product'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>
                      </div>

                      

                </div>

          </div>

        </div>
    </>
    )
  }
}


export default Main;

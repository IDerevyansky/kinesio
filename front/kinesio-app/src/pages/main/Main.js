import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

// import CallBack from '../../components/callBack/callBack';

// const dataMain = dataPages.pages.main.section;
const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataMainBanner:'',
      section_one_title:'',
      section_one_body_text:'',
      link_more_ru:''
    }
  }

  componentDidMount = async () => {

    // const respons = fetch(url, {method:"GET"}).then(res => res.json()).then(data => data.pages);
    const respons = await fetch(url).then(pages => pages.json());
    this.setState({
      dataMainBanner:respons.pages.main.section.MainBanner,
      section_one_title:respons.pages.main.section.Body.section_one.section_one_title,
      section_one_body_text:respons.pages.main.section.Body.section_one.section_one_body_text,
      link_more_ru:respons.pages.main.section.options.link_more_ru
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

          <div className="section-one">

            <div className="section-one__content">

                  <div className="section-one__title">

                    <h2>{this.state.section_one_title}</h2> 

                  </div>
                  <div className="section-one__body-text">

                    <p>{this.state.section_one_body_text}</p>
                    
                    <Link  to={'/whatIs'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>

                  </div>

            </div>

          </div>

        </div>
    </>
    )
  }
}


export default Main;

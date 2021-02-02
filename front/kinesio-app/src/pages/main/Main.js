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
                    <h2>Немного о себе</h2>
                  </div>
                  
                  <div className="section-two__body-text">

                      <p>
                        Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить.
                        Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. 
                      </p>

                      <Link  to={'/about'} rel="noopener noreferrer" ><p className="more">{this.state.link_more_ru}</p></Link>

                  </div>  

                  

                </div>

                <div className="section-two__img"></div>

              </div>

          </div>

          

        </div>
    </>
    )
  }
}


export default Main;

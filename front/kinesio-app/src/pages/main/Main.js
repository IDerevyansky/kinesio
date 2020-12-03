import React, { Component } from 'react';
import './Main.css'

import { dataPages } from '../pageStorage';
// import CallBack from '../../components/callBack/callBack';

class Main extends Component {

  render(){

    const dataMain = dataPages.pages.main;


    return(
    <>
      <div className="colorSeporatorBlock">
            <div className="bannerMainBox">
              <div className="textBannerContainer">

                <div className="textMainBanner">

                  <h1>{dataMain.section.MainBanner.h1}</h1>
                  <p>{dataMain.section.MainBanner.p}</p>

                </div>

                    <div className="callBackBanner">

                      <div onClick={()=>{this.props.statusPopUp(true)}} className="btnSingUpMainBanner"></div>

                    </div>

              </div>
              </div>
        </div>

        <div className="bodyMainContent" >qwewqeqweqwewqwq</div>
    </>
    )
  }
}

export default Main;

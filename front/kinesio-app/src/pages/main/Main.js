import React, { Component } from 'react';
import './Main.css'

import { dataPages } from '../pageStorage';
// import CallBack from '../../components/callBack/callBack';

const dataMain = dataPages.pages.main.section;

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}
    }
  }

  componentDidMount(){



  }


  render(){

    console.log();

    return(
    <>
      <div className="contentBanner">
            <div className="bannerMainBox">
              <div className="textBannerContainer">

                <div className="textMainBanner">

                  <h1>{dataMain.MainBanner.h1}</h1>
                  <p>{dataMain.MainBanner.p}</p>

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

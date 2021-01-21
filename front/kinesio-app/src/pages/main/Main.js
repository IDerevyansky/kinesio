import React, { Component } from 'react';
import './Main.css'

// import CallBack from '../../components/callBack/callBack';

// const dataMain = dataPages.pages.main.section;
const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataMainBanner:''
    }
  }

  componentDidMount = async () => {

    // const respons = fetch(url, {method:"GET"}).then(res => res.json()).then(data => data.pages);
    const respons = await fetch(url).then(pages => pages.json());
    this.setState({dataMainBanner:respons.pages.main.section.MainBanner});
    // console.log(respons.pages.main.section.MainBanner);
  }


  render(){



    return(
    <>
      <div className="contentBanner">
            <div className="bannerMainBox">

              <div className="textBannerContainer">

                <div className="textMainBanner">

                  <h1>{this.state.dataMainBanner.h1}</h1>
                  <p>{this.state.dataMainBanner.p}</p>

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

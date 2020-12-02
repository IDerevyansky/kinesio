import React, {Component} from 'react';
import './footer.css';
import CallBack from '../callBack/callBack';

import { data } from '../storage';


class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      listItem:[]
    }
  }

componentDidMount(){
  this.setState({listItem:data.listItem});
}




render(){

  var item = this.state.listItem.map(
    (item, i) =>{
      return  <a key={i} href={item.url} rel="noopener noreferrer"><li key={i} >{item.name}</li></a>
    }
  );

  return(

<div className="footerContainer">

  <div className="contentBox">

    <div className="flex">
      <div className="LogoFooterBox"></div>
      <div className="itemBoxFooter f-w-600 f-16">{item}</div>
    </div>

    <div className="flex">

      <div className="containerButtonFooter">

      <CallBack view="gray"/>

      </div>

      <div className="socialContainer">

        <p className="socialContainerText f-16">Я в соцсетях</p>
        <div className="socialIcon">
          <a href={data.socialAccount.facebook.linkAccount} rel="noopener noreferrer" target="_blank"><div className="faceBookIcon"></div></a>
          <a href={data.socialAccount.instagram.linkAccount} rel="noopener noreferrer" target="_blank"><div className="instagramIcon m24-l"></div></a>
          <a href={data.socialAccount.vk.linkAccount} rel="noopener noreferrer" target="_blank"><div className="vkontacteIcon m24-l"></div></a>
        </div>

      </div>
    </div>

    <div className="disclamer">
    <p className="f-12">© 1998-2020  Derevyanskaya </p>
    <p className="f-12">This site is operated techically by AI Accept Solutions Limited (registered at 17 Ensign House, Admirals Way, Canary Wharf, London) a subsidiary of Alpari Limited.</p>
    </div>

  </div>


</div>

  )
}


}


export default Footer;

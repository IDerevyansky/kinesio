import React, {Component} from 'react';
import './footer.css';
import CallBack from '../callBack/callBack';


const url = "https://iderevyansky.github.io/kinesio/back/storage.json";

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      listItem:[],
      facebook:"",
      instagram:"",
      vk:""
    }
  }

componentDidMount = async () => {
  const respons = await fetch(url).then(data => data.json());
  
  this.setState({
    listItem:respons.listItem,
    facebook:respons.socialAccount.facebook.linkAccount,
    instagram:respons.socialAccount.instagram.linkAccount,
    vk:respons.socialAccount.vk.linkAccount
  });

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
          <a href={this.state.facebook} rel="noopener noreferrer" target="_blank"><div className="faceBookIcon"></div></a>
          <a href={this.state.instagram} rel="noopener noreferrer" target="_blank"><div className="instagramIcon m24-l"></div></a>
          <a href={this.state.vk} rel="noopener noreferrer" target="_blank"><div className="vkontacteIcon m24-l"></div></a>
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

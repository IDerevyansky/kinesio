import React, {Component} from 'react';
import './footer.css';

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

            //Верстка из PopUp контейнера начало
            <div className="popUpContent">

              <div className="containerButton">

                  <div className="left">


                      <p className="popUpText">Записаться в один клик</p>
                        <div className="messageBox">
                          <a href={"https://wa.me/"+data.massagerContent.whatsApp.id+"?text="+data.massagerContent.whatsApp.text} rel="noopener noreferrer" target="_blank"><div className="whatsapp"></div></a>
                          <a href={"tg://resolve?domain="+data.massagerContent.telegram.id} rel="noopener noreferrer" target="_blank"><div className="telegram m24-l"></div></a>
                          <a href={"viber://chat?number="+data.massagerContent.viber.id} rel="noopener noreferrer" target="_blank"><div className="viber m24-l"></div></a>
                        </div>


                  </div>

                  <div className="right" >

                    <div className="margin">
                      <p className="textLeft">Запись через Email</p>
                      <a href={"mailto:"+data.massagerContent.email.id+"?subject="+data.massagerContent.email.title+"&body="+data.massagerContent.email.text} rel="noopener noreferrer" target="_blank"><div className="singUp"></div></a>
                    </div>

                  </div>


              </div>

            </div>
            //Верстка из PopUp контейнера конец

      </div>
      <div className="socialContainer">

        <p className="socialContainerText f-16">Я в соцсетях</p>
        <div className="socialIcon">
          <a href="" rel="noopener noreferrer" target="_blank"><div className="faceBookIcon"></div></a>
          <a href="" rel="noopener noreferrer" target="_blank"><div className="instagramIcon m24-l"></div></a>
          <a href="" rel="noopener noreferrer" target="_blank"><div className="vkontacteIcon m24-l"></div></a>
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

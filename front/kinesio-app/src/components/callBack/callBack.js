import React, { Component } from 'react';
import './callBack.css';

import { data } from '../storage';


class CallBack extends Component {

  render(){
    var view = this.props.view;

    return(
      <div className="callBackConteiner">

        <div className="leftSide">
        <p className={"styleText-"+view}>Записаться в один клик</p>

          <div className="massagerIcon">
            <a href={"https://wa.me/"+data.massagerContent.whatsApp.id+"?text="+data.massagerContent.whatsApp.text} rel="noopener noreferrer" target="_blank"><div className={"whatsapp-"+view}></div></a>
            <a href={"tg://resolve?domain="+data.massagerContent.telegram.id} rel="noopener noreferrer" target="_blank"><div className={"telegram-"+view+" m24-l"}></div></a>
            <a href={"viber://chat?number="+data.massagerContent.viber.id} rel="noopener noreferrer" target="_blank"><div className={"viber-"+view+" m24-l"}></div></a>
          </div>

        </div>

        <div className={"seporator-"+view}></div>

        <div className="rightSide">
        <p className={"styleText-"+view}>Запись через Email</p>
          <div className="">
            <a href={"mailto:"+data.massagerContent.email.id+"?subject="+data.massagerContent.email.title+"&body="+data.massagerContent.email.text} rel="noopener noreferrer" target="_blank"><div className={"btnSingUp-"+view}></div></a>
          </div>
        </div>

      </div>
    )

  }

}

export default CallBack;

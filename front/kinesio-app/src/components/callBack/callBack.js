import React, { Component } from 'react';
import './callBack.css';


class CallBack extends Component {
  
  
  render(){

    var view = this.props.view;
    
    return(
      <div className="callBackConteiner">

        <div className="leftSide">
        <p className={"styleText-"+view}>Записаться в один клик</p>

          <div className="massagerIcon">
            <a href={"https://wa.me/"+this.props.whatsApp.id+"?text="+this.props.whatsApp.text} rel="noopener noreferrer" target="_blank"><div className={"whatsapp-"+view}></div></a>
            <a href={"tg://resolve?domain="+this.props.telegram.id} rel="noopener noreferrer" target="_blank"><div className={"telegram-"+view+" m24-l"}></div></a>
            <a href={"viber://chat?number="+this.props.viber.id} rel="noopener noreferrer" target="_blank"><div className={"viber-"+view+" m24-l"}></div></a>
          </div>

        </div>

        <div className={"seporator-"+view}></div>

        <div className="rightSide">
        <p className={"styleText-"+view}>Запись через Email</p>
          <div className="">
            <a href={"mailto:"+this.props.email.id+"?subject="+this.props.email.title+"&body="+this.props.email.text} rel="noopener noreferrer" target="_blank"><div className={"btnSingUp-"+view}></div></a>
          </div>
        </div>

      </div>
    )

  }

}

export default CallBack;

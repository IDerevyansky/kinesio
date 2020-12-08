import React, { Component } from 'react';
import './callBack.css';

const url = "https://iderevyansky.github.io/kinesio/back/storage.json";

class CallBack extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      telegram:"",
      viber:"",
      whatsApp:""
    }

  }


componentDidMount = async () => {

    const respons = await fetch(url).then(data => data.json());
    this.setState({
      email:respons.massagerContent.email,
      telegram:respons.massagerContent.telegram,
      viber:respons.massagerContent.viber,
      whatsApp:respons.massagerContent.whatsApp
    });
    // console.log(this.state);
  
}

  
  render(){

    var view = this.props.view;
    
    return(
      <div className="callBackConteiner">

        <div className="leftSide">
        <p className={"styleText-"+view}>Записаться в один клик</p>

          <div className="massagerIcon">
            <a href={"https://wa.me/"+this.state.whatsApp.id+"?text="+this.state.whatsApp.text} rel="noopener noreferrer" target="_blank"><div className={"whatsapp-"+view}></div></a>
            <a href={"tg://resolve?domain="+this.state.telegram.id} rel="noopener noreferrer" target="_blank"><div className={"telegram-"+view+" m24-l"}></div></a>
            <a href={"viber://chat?number="+this.state.viber.id} rel="noopener noreferrer" target="_blank"><div className={"viber-"+view+" m24-l"}></div></a>
          </div>

        </div>

        <div className={"seporator-"+view}></div>

        <div className="rightSide">
        <p className={"styleText-"+view}>Запись через Email</p>
          <div className="">
            <a href={"mailto:"+this.state.email.id+"?subject="+this.state.email.title+"&body="+this.state.email.text} rel="noopener noreferrer" target="_blank"><div className={"btnSingUp-"+view}></div></a>
          </div>
        </div>

      </div>
    )

  }

}

export default CallBack;

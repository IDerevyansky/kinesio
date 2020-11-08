import React, {Component} from 'react';
import './PopUp.css';
import { data } from '../storage';



class PopUp extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){


    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; //Узнаем величину прокрутки страницы
    var heightWindow = window.innerHeight / 100 * 20; //Получаем 20% от высоты видемой области страницы
    // var widthWindow = window.innerWidth // На основе этого параметра сделать функцию выбора ссылки  для viber descktop или mobile

    return (

    <>

    <div onClick={()=>{this.props.statusPopUp(false)}} style={{top:scrollTop}} className="bgPopUp"></div>

                <div style={{top:scrollTop+heightWindow}} className="popUpContainer">
                  <div className="popUpBlock">
                    <div onClick={()=>{this.props.statusPopUp(false)}} className="crossClosed"></div>
                      <div className="popUpContent">
                        <p className="textCenter m24-b f-22 f-w-600">Записаться</p>
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
                                <p className="popUpText">Запись через Email</p>
                                <a href={"mailto:"+data.massagerContent.email.id+"?subject="+data.massagerContent.email.title+"&body="+data.massagerContent.email.text} rel="noopener noreferrer" target="_blank"><div className="singUp"></div></a>
                              </div>

                            </div>


                        </div>
                        <div>
                        <p className="textCenter m24-t f-16">или</p>
                        <a  href={"tel:"+data.massagerContent.phone} rel="noopener noreferrer" target="_blank" ><p className="textCenter m24-t f-22 f-w-600">{data.massagerContent.phone}</p></a>
                        </div>
                      </div>
                  </div>
                </div>

    </>

    )

  }

}

export default PopUp;

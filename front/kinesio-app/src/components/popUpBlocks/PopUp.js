import React, {Component} from 'react';
import './PopUp.css';


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

                                <p className="textCenter">Записаться в один клик</p>
                                  <div className="messageBox">
                                    <a href="https://wa.me/+79653121776?text=urlencodedtext" rel="noopener noreferrer" target="_blank"><div className="whatsapp"></div></a>
                                    <a href="tg://resolve?domain=@IDerevyansky" rel="noopener noreferrer" target="_blank"><div className="telegram m24-l"></div></a>
                                    <a href="viber://chat?nnumber=+79653121776?text=qqqqqqq" rel="noopener noreferrer" target="_blank"><div className="viber m24-l"></div></a>
                                  </div>

                            </div>

                            <div className="right" >

                              <div className="margin">
                                <p className="textCenter">Запись через Email</p>
                                <a href="mailto:iderevyansky@yandex.ru?subject=Мое письмо&body=Мой текст в этом письме" rel="noopener noreferrer" target="_blank"><div className="singUp"></div></a>
                              </div>

                            </div>


                        </div>
                        <div>
                        <p className="textCenter m24-t f-16">или</p>
                        <a  href="tel:8-977-414-74-77" rel="noopener noreferrer" target="_blank" ><p className="textCenter m24-t f-22 f-w-600">8 977 414 74 77</p></a>
                        </div>
                      </div>
                  </div>
                </div>

    </>

    )

  }

}

export default PopUp;

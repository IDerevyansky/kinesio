import React, {Component} from 'react';
import './PopUp.css';
import CallBack from '../callBack/callBack';



class PopUp extends Component {


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

                          <CallBack 
                          
                          {...this.props}
                          view="dark"
                          
                          />

                        <div>
                        <p className="textCenter m24-t f-16">или</p>
                        <a href={"tel:"+this.props.phone} rel="noopener noreferrer" target="_blank" ><p className="textCenter m24-t f-22 f-w-600">{this.props.phone}</p></a>
                        </div>
                      </div>
                  </div>
                </div>

    </>

    )

  }

}

export default PopUp;

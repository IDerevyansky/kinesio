import React from 'react';
import './PopUp.css';


document.body.style.overflowY="hidden";


function PopUp() {

  return (

    //Background for test view mock up site
    <div className="BGtest">

      <div className="bgPopUp">
        <div className="popUpContainer">
          <div className="popUpBlock">
            <div className="crossClosed"></div>
              <div className="popUpContent">
                <p className="textCenter m24-b f-22 f-w-600">Записаться</p>
                <div className="containerButton">

                    <div className="left inlineBlock">

                        <p className="textCenter">Записаться в один клик</p>
                          <div className="messageBox">
                            <div className="whatsapp inlineBlock"></div>
                            <div className="telegram inlineBlock m24-l"></div>
                            <div className="viber inlineBlock m24-l"></div>
                          </div>

                    </div>

                    <div className="right inlineBlock" >

                      <div style={{marginLeft:"46px"}}>
                        <p className="textCenter">Запись через Email</p>
                        <a href="mailto:iderevyansky@yandex.ru" rel="noopener noreferrer" target="_blank"><div className="singUp"></div></a>
                      </div>

                    </div>


                </div>
                <p className="textCenter m24-t f-16">или</p>
                <a  href="tel:8-977-414-74-77" rel="noopener noreferrer" target="_blank" ><p className="textCenter m24-t f-22 f-w-600">8 977 414 74 77</p></a>
              </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default PopUp;

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
            <p>Hello!</p>
          </div>
        </div>
      </div>

    </div>

  );
}

export default PopUp;

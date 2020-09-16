import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {}

}





componentDidMount(){

  var resize = () =>{

    var menuContent, logoBox, itemBox, sumTwoBox, ul;

    itemBox =     document.getElementsByClassName('itemBox');
    logoBox =     document.getElementsByClassName('logoBox');
    menuContent = document.getElementsByClassName('menuContent');
    ul =          document.getElementsByClassName('ul');
    sumTwoBox =   itemBox[0].clientWidth + logoBox[0].clientWidth;

    // if(menuContent[0].clientWidth <= sumTwoBox){
    //   console.log('меньше');
    // }
    //
    // var li = () =>{
    //
    //   for (var i = 0; i < ul[0].childElementCount; i++) {
    //     <li>Item</li>
    //   }
    //
    // }







    // console.log('menuContent: '+menuContent[0].clientWidth+' logoBox: '+logoBox[0].clientWidth+' itemBox: '+itemBox[0].clientWidth);

  }

  window.addEventListener('resize', ()=>{resize()});

}


render(){



  return(
    <>

      <div className="menuContainer">
        <div className="menuContent">



              <div className="logoBox"></div>

              <div className="itemBox">

                  <ul className="f-w-600 ul">

                  </ul>

                  <div className="mobileMenu"></div>

              </div>



        </div>
      </div>

    </>
  )
}




}

export default Menu;

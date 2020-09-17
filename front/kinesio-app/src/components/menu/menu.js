import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {}

}





componentDidMount(){

  var resize = () =>{

    var menuContent, logoBox, itemBox, sumTwoBox;

    itemBox =     document.getElementsByClassName('itemBox');
    logoBox =     document.getElementsByClassName('logoBox');
    menuContent = document.getElementsByClassName('menuContent');
    sumTwoBox =   itemBox[0].clientWidth + logoBox[0].clientWidth;


    if(menuContent[0].clientWidth <= sumTwoBox){
      console.log('меньше');
    }










    // console.log('menuContent: '+menuContent[0].clientWidth+' logoBox: '+logoBox[0].clientWidth+' itemBox: '+itemBox[0].clientWidth);

  }

  window.addEventListener('resize', ()=>{resize()});

}


render(){

  var listLi = ['item1', 'item2', 'item3', 'item4', 'item5'];

  var list = listLi.map((item, i)=>

  <li key={i} >{item}</li>

  );


  return(
    <>

      <div className="menuContainer">
        <div className="menuContent">



              <div className="logoBox"></div>

              <div className="itemBox">

                  <ul className="f-w-600 ul">
                  {list}
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

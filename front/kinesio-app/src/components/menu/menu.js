import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {
    listItemMain:[],
    test:''
  }

}





componentDidMount(){

  var menuContent, logoBox, itemBox, sumTwoBox, listItem, resize, sizeWindow, listItemMain = [], listItemMob = [], check, _768, _475;

  itemBox =     document.getElementsByClassName('itemBox');
  logoBox =     document.getElementsByClassName('logoBox');
  menuContent = document.getElementsByClassName('menuContent');
  sizeWindow =  document.documentElement.clientWidth;


  var listItem = [
    {
      name:'Item1',
      url:'#'
    },
    {
      name:'Item2',
      url:'#'
    },
    {
      name:'Item3',
      url:'#'
    },
    {
      name:'Item4',
      url:'#'
    },
    {
      name:'Item5',
      url:'#'
    }
  ];



  resize = () =>{

  sumTwoBox =   itemBox[0].clientWidth + logoBox[0].clientWidth;
  _768 = menuContent[0].clientWidth <= 768;
  _475 = menuContent[0].clientWidth <= 475;

listItemMain = [];
  if(_768){
      for (var i = 0; i < 3; i++) {

        listItemMain[i] = listItem[i];

      }
    }
  else{
    for (var i = 0; i < listItem.length; i++) {

      listItemMain[i] = listItem[i];

    }
  }

  this.setState({ listItemMain:listItemMain });


  }

  window.onload = () => {
    resize();
    window.addEventListener('resize', ()=>{resize()});
  };


}




render(){

  var item = this.state.listItemMain.map(
    (item, i) =>{
      return  <li key={i} >{item.name}</li>
    }
  );

  return(
    <>

      <div className="menuContainer">
        <div className="menuContent">



              <div className="logoBox"></div>

              <div className="itemBox">

                  <ul className="f-w-600 ul">
                    {item}
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

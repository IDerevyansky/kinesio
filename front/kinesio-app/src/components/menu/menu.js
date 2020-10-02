import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {
    listItemMain:[],
    listItemMob:[],
    visible:true
  }

}





componentDidMount(){

  var listItem, resize, listItemMain = [], listItemMob = [];

//В данный момент ограничение на 5 пнктах
//Далее меняются значения sizeMax и sizeMin
  listItem = [
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

  var sizeWindow =  document.documentElement.clientWidth;
  var logoBox = document.getElementsByClassName('logoBox');

  var sizeMax = 700;
  var sizeMin = 450;
  var after = sizeWindow > sizeMax;
  var befor = sizeWindow < sizeMax & sizeWindow > sizeMin;

  listItemMain=[];


  if(after){

      logoBox[0].style.width='216px';

      for (let i = 0; i < listItem.length; i++) {

        listItemMain[i] = listItem[i];
        listItemMob=[];

      }

      this.setState({ visible:false });

    }
  else if(befor){

    logoBox[0].style.width='130px';

    for (let i = 0; i < 3; i++) {

      listItemMain[i] = listItem[i];

    }

    for (let i = 3; i < listItem.length; i++) {

      listItemMob[i] = listItem[i];

    }

    this.setState({ visible:true });

  }
  else{

    logoBox[0].style.width='130px';

    for (let i = 0; i < listItem.length; i++) {

      listItemMob[i]=listItem[i];
      listItemMain = [];

    }

      this.setState({ visible:true });

    }

  this.setState({ listItemMain:listItemMain, listItemMob:listItemMob });

  }

  window.onload = () => {
    resize();
    window.addEventListener('resize', ()=>{resize()});
  };


}




render(){

  var mobileMenu = (

    <div className="mobileMenu"></div>

  );

  var item = this.state.listItemMain.map(
    (item, i) =>{
      return  <li key={i} >{item.name}</li>
    }
  );

  var itemMob = this.state.listItemMob.map(
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

                    {this.state.visible?mobileMenu:''}

              </div>


        </div>
      </div>

      <div className="popUpMenuContainer">
        <ul className="f-w-600 ul">
          {itemMob}
        </ul>
      </div>

    </>

  )
}




}

export default Menu;

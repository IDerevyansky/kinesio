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

  var listItem, resize, sizeWindow, listItemMain = [], listItemMob = [];


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

  sizeWindow =  document.documentElement.clientWidth;
  var logoBox = document.getElementsByClassName('logoBox');
  var itemBox = document.getElementsByClassName('itemBox');
  var sum = logoBox[0].clientWidth + itemBox[0].clientWidth;

  console.log( 'Ширина окна: '+sizeWindow );
  console.log( 'Сумма блоков: '+sum );

  var after_768 = sizeWindow > 768;
  var befor_768 = sizeWindow < 768 & sizeWindow > 475;

  listItemMain=[];

  if(after_768){

      for (let i = 0; i < listItem.length; i++) {

        listItemMain[i] = listItem[i];
        listItemMob=[];

      }

      this.setState({ visible:false });

    }
  else if(befor_768){

    for (let i = 0; i < 3; i++) {

      listItemMain[i] = listItem[i];

    }

    for (let i = 3; i < listItem.length; i++) {

      listItemMob[i] = listItem[i];

    }

    this.setState({ visible:true });

  }
  else{

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

    </>
  )
}




}

export default Menu;

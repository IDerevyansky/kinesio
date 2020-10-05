import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.isOpen = this.isOpen.bind(this);
  this.state = {
    listItemMain:[],
    listItemMob:[],
    visible:false,
    isOpen:false
  }

}

componentDidMount(){

  var listItem, resize, visible, listItemMain = [], listItemMob = [];



//В данный момент ограничение на 5 пунктах
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

  visible = (e) => {
    this.setState({ visible:e, isOpen:false });
  }


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

      // this.setState({ visible:false });
      visible(false);

    }
  else if(befor){

    logoBox[0].style.width='130px';

    for (let i = 0; i < 3; i++) {

      listItemMain[i] = listItem[i];

    }
    listItemMob=[];
    for (let i = 3; i < listItem.length; i++) {

      listItemMob[i] = listItem[i];

    }

    visible(true);

  }
  else{

    logoBox[0].style.width='130px';

    for (let i = 0; i < listItem.length; i++) {

      listItemMob[i]=listItem[i];
      listItemMain = [];

    }

      visible(true);

    }

  this.setState({ listItemMain:listItemMain, listItemMob:listItemMob });

  }


    resize();
    window.addEventListener('resize', ()=>{resize()});
    window.addEventListener('scroll', ()=>{ this.setState({ isOpen:false })} );

}


isOpen = () => {

  if(this.state.visible === true){

    this.setState( state => ({ isOpen:!state.isOpen }));

  }

}




render(){

  var item = this.state.listItemMain.map(
    (item, i) =>{
      return  <a key={i} href={item.url}><li key={i} >{item.name}</li></a>
    }
  );

  var itemMob = this.state.listItemMob.map(
    (item, i) =>{
      return  <a key={i} href={item.url}><li key={i} >{item.name}</li></a>
    }
  );

  var mobileMenu = (

    <div onClick={this.isOpen} className="mobileMenu"></div>

  );

  var popUpMenuContainer = (

    <div onClick={ ()=>{ this.setState({ isOpen:false })} } className="bgMobileMenu">
      <div className="popUpMenuContainer">
        <ul className="f-w-600 ul">
          {itemMob}
        </ul>
      </div>
    </div>

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

        {this.state.isOpen?popUpMenuContainer:''}

    </>

  )
}




}

export default Menu;

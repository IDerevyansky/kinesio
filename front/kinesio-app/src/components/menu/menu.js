import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {
    listItemMain:[]
  }

}





componentDidMount(){

  var menuContent, logoBox, itemBox, sumTwoBox, listItem, resize, sizeWindow, listItemMain = [], listItemMob = [];

  itemBox =     document.getElementsByClassName('itemBox');
  logoBox =     document.getElementsByClassName('logoBox');
  menuContent = document.getElementsByClassName('menuContent');
  sizeWindow =  document.documentElement.clientWidth;


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

  this.setState({listItemMain:listItem});

  resize = () =>{

    sumTwoBox =   itemBox[0].clientWidth + logoBox[0].clientWidth;

    // console.log('Блок с контентом: '+menuContent[0].clientWidth);
    // console.log('Блок с лого: '+logoBox[0].clientWidth);
    // console.log('Блок с текстом: '+itemBox[0].clientWidth);
    console.log('Сумма двух блоков: '+sumTwoBox);
    console.log(document.documentElement.clientWidth);

        if( sizeWindow > sumTwoBox ){
          console.log('main');
        }else{
          console.log('mob');
          }




  }

  window.onload = () => {
    resize();
    window.addEventListener('resize', ()=>{resize()});
  };


}




render(){

var item = this.state.listItemMain.map((item, i)=>
  <li key={i} >{item.name}</li>
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

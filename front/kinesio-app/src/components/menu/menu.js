import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {
    listItemMain:[],
    listItemMobile:[]
  }

}





componentDidMount(){

  var resize = () =>{


    var menuContent, logoBox, itemBox, sumTwoBox, listItem, listItemMain = [], listItemMobile = [];

    itemBox =     document.getElementsByClassName('itemBox');
    logoBox =     document.getElementsByClassName('logoBox');
    menuContent = document.getElementsByClassName('menuContent');
    sumTwoBox =   itemBox[0].clientWidth + logoBox[0].clientWidth;
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

    // this.setState({ listItemMain:listItem });
    // this.setState({ listItemMobile:listItem });



    console.log('Контент');
    console.log(menuContent[0].clientWidth);
    console.log('Сумма двух блоков');
    console.log(sumTwoBox);

    for (let i = 0; i < listItem.length; i++) {

      if(menuContent[0].clientWidth > sumTwoBox){

      console.log('true');
        // listItemMain[i] = listItem[i];
        // this.setState({ listItemMain:listItemMain });

      }else{

        console.log('false');
        // listItemMobile[i] = listItem[i];
        // this.setState({ listItemMobile:listItemMain });

            }

          }

// console.log(listItemMain);
// console.log('----------');
// console.log(listItemMobile);
// console.log('----------');

// this.setState({ listItemMain:listItemMain, listItemMobile:listItemMobile });

                  }

// console.log(listItem);
// listItem.splice(listItem.length - 1, 1);
// console.log(listItem);


resize();
window.addEventListener('resize', ()=>{resize()});

}



render(){


  // console.log(this.state.listItemMain);
  // console.log('Мобильное '+this.listItemMobile);

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

import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {
    listItem:'пусто'
  }

}





componentDidMount(){

  var menuContent, logoBox, itemBox, sumTwoBox, listItem;

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

  // this.setState({listItem:'qwe'});


  // var resize = () =>{}
  // resize();
  // window.addEventListener('resize', ()=>{resize()});

}




render(){

// var item = this.state.listItem.map((item, i)=>
//   <li key={i} >{item.name}</li>
// );

  return(
    <>

      <div className="menuContainer">
        <div className="menuContent">



              <div className="logoBox"></div>

              <div className="itemBox">

                  <ul className="f-w-600 ul">
{this.state.listItem}
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

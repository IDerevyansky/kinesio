import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.state = {}

}

render(){
  return(
    <>

      <div className="menuContainer">
        <div className="menuContent">
          <div className="logoBox"></div>
          <div className="itemBox"></div>
        </div>
      </div>

    </>
  )
}




}

export default Menu;

import React, {Component} from 'react';
import './App.css';
import PopUp from './components/popUpBlocks/PopUp';
import Menu from './components/menu/menu';



class App extends Component {
  constructor(props){
    super(props)
    this.statusPopUp = this.statusPopUp.bind(this);
    this.state={
      statusPopUp:false
    }

  }

  //Функция управления статусом всплывающего окна
  statusPopUp = (q) => {
    this.setState({statusPopUp:q});
    q?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"; //Добовляем или убираем скрол
  };


  render(){

    return (


      <>
            <Menu statusPopUp={this.statusPopUp}/>
            {this.state.statusPopUp?<PopUp statusPopUp={this.statusPopUp}  />:''}
            <div onClick={()=>{this.statusPopUp(true)}} className="BGtest"></div>
      </>


    );


  }

}

export default App;

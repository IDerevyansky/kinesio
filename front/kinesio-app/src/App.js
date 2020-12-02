import React, {Component} from 'react';
import './App.css';
import PopUp from './components/popUpBlocks/PopUp';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

import Provider from './components/provider';

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

// <div onClick={()=>{this.statusPopUp(true)}} className="BGtest"></div> Фон

// Меню вернуть при доработле callBack блока
// <Menu statusPopUp={this.statusPopUp}/>
// {this.state.statusPopUp?<PopUp statusPopUp={this.statusPopUp}  />:''}



  render(){

    return (


      <>



            <div  className='App-body'>
              <Provider />
            </div>

            <Footer />
      </>


    );


  }

}

export default App;

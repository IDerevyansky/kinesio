import React, {Component} from 'react';
import './App.css';
import PopUp from './components/popUpBlocks/PopUp';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

import Provider from './components/provider';

const url = "https://iderevyansky.github.io/kinesio/back/storage.json";

class App extends Component {
  constructor(props){
    super(props)
    this.statusPopUp = this.statusPopUp.bind(this);
    this.state={
      statusPopUp:false,
      listItem:[],
      email:"",
      telegram:"",
      viber:"",
      whatsApp:"",
      facebook:'',
      instagram:'',
      vk:''
    }

  }

  componentDidMount = async () => {
    const respons = await fetch(url).then(data => data.json());
    this.setState({
      listItem:respons.listItem,
      email:respons.massagerContent.email,   
      telegram:respons.massagerContent.telegram,
      viber:respons.massagerContent.viber,
      whatsApp:respons.massagerContent.whatsApp,
      facebook:respons.socialAccount.facebook.linkAccount,
      instagram:respons.socialAccount.instagram.linkAccount,
      vk:respons.socialAccount.vk.linkAccount
    });
    // console.log(respons);
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

            <Menu 
              statusPopUp = {this.statusPopUp}
              listItem = {this.state.listItem}
              email = {this.state.email}
              telegram = {this.state.telegram}
              viber = {this.state.viber}
              whatsApp = {this.state.whatsApp}
            />

            {this.state.statusPopUp?<PopUp statusPopUp={this.statusPopUp}  />:''}

            <div  className='App-body'>
              <Provider statusPopUp={this.statusPopUp} />
            </div>

            <Footer 
            listItem = {this.state.listItem}
            facebook = {this.state.facebook}
            instagram = {this.state.instagram}
            vk = {this.state.vk}
            />

      </>


    );


  }

}

export default App;

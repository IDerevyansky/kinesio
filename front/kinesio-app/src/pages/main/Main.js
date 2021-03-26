import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'


import HeaderBanner from "../../components/header-banner/headerBanner";
import TextBox from "../../components/text-box/textBox";
// import Cards from "../../components/card/Cards";
// import CardNews from "../../components/card_news/CardNews";

// import CallBack from '../../components/callBack/callBack';


const url = "https://iderevyansky.github.io/kinesio/back/pageStorage.json";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }

  componentDidMount = async () => {

    const respons = await fetch(url).then(pages => pages.json());
    this.setState({

    });
    
  }


  render(){
    

    return(

    <>

        <HeaderBanner 
        statusPopUp={this.props.statusPopUp}
        title="Вам достаточно знать номер телефона данного человека."
        text="Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат. Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат."
        />
          
        
        <TextBox
         link="/whatIs"
         title="Что нужно знать о кинезиологии"
         text="Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. 
         Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился 
         очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая 
         расходы и увеличивая прибыль. – Рик поднял бокал с шампанским. – За замечательную команду с блестящим 
         будущим! Он сделал глоток из бокала под гул всеобщего одобрения.<br/><br/>

         Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла 
         в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина 
         опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж 
         их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, 
         но Рик не мог ждать."
         orientation="x"
         />

      
    </>

    )
  }
}


export default Main;

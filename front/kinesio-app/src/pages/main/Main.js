import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'


import HeaderBanner from "../../components/header-banner/headerBanner";
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
        title="Вам достаточно знать номер телефона данного человека."
        text="Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат. Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат."
        />
          
        <div style={{border:"1px solid red"}} className="container m-auto">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae elit augue. Duis volutpat euismod nulla, non euismod ipsum eleifend in. Sed vehicula, turpis eget cursus lacinia, urna purus scelerisque justo, et dictum augue sem id dui. Vivamus non lacinia erat. Aenean eu convallis velit. Maecenas at posuere erat, sed vestibulum urna. Sed mattis lorem vitae augue aliquet cursus at id erat. Sed in purus metus. Donec in justo posuere, maximus ligula eget, vulputate magna. Nunc tincidunt metus non mi sagittis, non maximus dui suscipit. Pellentesque ut tellus sit amet purus accumsan auctor id quis enim. Aliquam nisi lacus, consectetur sit amet suscipit nec, molestie ut nulla. Suspendisse potenti. Vestibulum scelerisque risus et lectus sodales, nec condimentum tortor condimentum.

Aliquam erat volutpat. Morbi laoreet, velit et tristique lobortis, eros nibh gravida leo, vel accumsan dolor nisl vel eros. Suspendisse pellentesque vitae massa ac dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut orci sagittis, convallis tellus eu, semper neque. Nunc turpis risus, rutrum nec ultrices rutrum, placerat quis diam. Morbi ipsum quam, dictum ut turpis ut, tristique fermentum eros. Vestibulum aliquam mauris eu arcu interdum dictum. Phasellus eros ipsum, hendrerit id dapibus vitae, pellentesque id mi. Aenean volutpat turpis erat, sit amet scelerisque massa lacinia vitae.

Mauris ligula eros, elementum eget nulla ut, elementum iaculis ante. Mauris consectetur, erat quis tempus consequat, tortor ex lacinia felis, ut hendrerit massa massa quis dolor. Suspendisse lectus nulla, dictum eu bibendum ut, tincidunt a enim. Aenean nunc ipsum, egestas semper ultricies ac, tincidunt efficitur nibh. Praesent dignissim ligula quis nisi posuere, ut consectetur ex blandit. Quisque eget libero neque. Maecenas elementum dui risus, et ultrices ex semper quis. Nunc tincidunt finibus ante, rutrum lacinia turpis. Curabitur vitae purus eu metus bibendum rhoncus id non diam. Phasellus consequat blandit augue congue bibendum. Duis at auctor tortor.

Donec convallis gravida vestibulum. Sed eu tortor eu odio maximus porttitor. Nam luctus dui vitae laoreet pharetra. Aliquam et pharetra nisi. Pellentesque in rhoncus metus. Aliquam vitae cursus felis, sit amet semper justo. Vivamus iaculis urna a tristique aliquam. Ut maximus varius massa, auctor aliquet lacus blandit sit amet. Donec blandit, tortor ac fringilla placerat, erat nulla hendrerit nunc, sed sollicitudin libero dolor vel lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sapien magna, vulputate quis pellentesque sed, consectetur sed quam. Proin ac tincidunt ante. Donec sagittis odio eleifend justo viverra semper.

Donec tempus est ac eros venenatis, fringilla tincidunt lacus vulputate. Nam odio metus, vestibulum a tortor vel, vulputate faucibus lorem. Cras ultrices ex eget efficitur congue. Nam molestie viverra magna, in faucibus libero convallis in. Nunc interdum quam eu condimentum hendrerit. Suspendisse potenti. Vestibulum eget sem sit amet orci rutrum volutpat eu eu dolor. Vestibulum ut mi eget nunc accumsan dictum non id orci. Sed venenatis, augue eu blandit mollis, lectus elit egestas augue, lobortis fringilla risus quam ornare nibh. Pellentesque et mollis neque, eu finibus tortor. Vestibulum quis nibh est. Donec eu rutrum lacus. In ullamcorper sagittis metus, at mollis magna gravida in.

        </div>

    </>

    )
  }
}


export default Main;

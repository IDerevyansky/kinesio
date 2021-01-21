import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './menu.css';


class Menu extends Component {
  constructor(props){
    super(props);
    this.isOpen = this.isOpen.bind(this);
    this.state = {
      sizeMax:768,
      sizeMin:425,
      visibleMobMenu:false,
      visibleItemMain:true,
      isOpen:false,
      iconMenu:'iconMenuOpen',
      menuSticky:'absolute',
      visibleMenuSticky:false
    }

  }

componentDidMount = async () => {

  // var storeg = dataMenuComponent;

  var resize, visible;

  //Контролируем сварачивание основного меню и включение "гамбургера" или включение меню внизу под палец.
  visible = (e, w) => {
    this.setState({ visibleItemMain:w, visibleMobMenu:e, isOpen:false });
  }

var logoBox = document.getElementsByClassName('logoBox');

  //Работа с шириной экрана для 3 устройств.
  //Сейчас это просто смена размеров и позиционирования логотипа
  resize = () =>{

  var sizeWindow =  document.documentElement.clientWidth;

  var after = sizeWindow > this.state.sizeMax;
  var befor = sizeWindow > this.state.sizeMin;


  if(after){

      logoBox[0].style.width='216px';
      logoBox[0].style.margin='';

      visible(false, true);

    }
  else if(befor){

      logoBox[0].style.width='216px';
      logoBox[0].style.margin='';

      visible(true, false);

  }
  else{

      logoBox[0].style.width='130px';
      logoBox[0].style.margin='auto';

      visible(false, false);

    }


  }

  //Прилипающие меню с лого и кнопкой
  var memory=0;

  var scrollPage = () => {

      var scrollPageSum = window.pageYOffset || document.documentElement.scrollTop; //Узнаем величину прокрутки страницы
          //контроль по ширине
          if (document.documentElement.clientWidth > 630) {
              //контроль по высоте
              if(memory < scrollPageSum){

                    if(scrollPageSum >= 56){
                      this.setState({menuSticky:'fixed', visibleMenuSticky:true});
                    }

              }else{

                    this.setState({menuSticky:'absolute', visibleMenuSticky:false});

              }

          }else{

            this.setState({visibleMenuSticky:false});

          }

          memory = scrollPageSum;

  }




    resize();

    window.addEventListener('resize', ()=>{
      resize();
      scrollPage();
      this.setState({ isOpen:false, iconMenu:'iconMenuOpen' })
    });

    window.addEventListener('scroll', ()=>{
      scrollPage();
      this.setState({ isOpen:false, iconMenu:'iconMenuOpen' })
    });


}

//открыти мобильного меню и смена иконок "гамбургер" на "крест"
isOpen = () => {

  this.setState( { isOpen:!this.state.isOpen,  iconMenu:this.state.iconMenu === 'iconMenuOpen'?'iconMenuClose':'iconMenuOpen'});

}



render(){

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop; //Узнаем величину прокрутки страницы

  var item = this.props.listItem.map(
    (item, i) =>{
      return  <Link key={i} to={item.url} rel="noopener noreferrer"><li key={i} >{item.name}</li></Link>
    }
  );

  //подставляем класс с нужной иконкой
  var cssMobileMenu = 'mobileMenu ' + this.state.iconMenu;
  var mobileMenu = (

    <div onClick={this.isOpen} className={cssMobileMenu}></div>

  );

  var downBtnMenu = ( <div onClick={()=>{this.props.statusPopUp(true)}} className="downBtnMenu f-w-600">ЗАПИСАТЬСЯ</div> );
  var popUpMenuContainer = (

    <div onClick={ ()=>{ this.setState({ isOpen:false, iconMenu:'iconMenuOpen' })} } style={{top:scrollTop}} className="bgMobileMenu">
    {this.state.sizeMin >= document.documentElement.clientWidth?downBtnMenu:''}
      <div className="popUpMenuContainer">
        <ul className="f-w-600 ul">
          {item}
        </ul>
      </div>
    </div>

  );

  var downMobileMenu = (

    <div onClick={this.isOpen} className={this.state.iconMenu + " downMobileMenu "} ></div>

  );

var socialIconAll = (
<>
  <div className="stickyMessageBox">
    <a href={"https://wa.me/"+this.props.whatsApp.id+"?text="+this.props.whatsApp.text} rel="noopener noreferrer" target="_blank"><div className="stickyWhatsapp"></div></a>
    <a href={"tg://resolve?domain="+this.props.telegram.id} rel="noopener noreferrer" target="_blank"><div className="stickyTelegram m24-l"></div></a>
    <a href={"viber://chat?number="+this.props.viber.id} rel="noopener noreferrer" target="_blank"><div className="stickyViber m24-l"></div></a>
  </div>

  <a href={"mailto:"+this.props.email.id+"?subject="+this.props.email.title+"&body="+this.props.email.text} rel="noopener noreferrer" target="_blank"><div className="btnSticky"></div></a>
</>
);

var btn = (

  <div onClick={()=>{this.props.statusPopUp(true)}} className="btnSticky"></div>

);


  var stickyBox = (

    <div className="menuContainer menuContainerAnimation" style={{position:this.state.menuSticky, zIndex:'1'}}>
    <div className="menuContent">

    <Link to="/"> <div className="logoBox"></div></Link>

        <div className="stickyBox">

        {document.documentElement.clientWidth < this.state.sizeMax? socialIconAll : btn}



        </div>

    </div>
    </div>

  );



  return(

    <>
      

      {this.state.visibleMenuSticky?stickyBox:''}

      <div className="menuContainer">
        <div className="menuContent">


        <Link className="logoBox" to="/"></Link>
              



              <div className="itemBox">

                  <ul className="f-w-600 ul f-16">
                    {this.state.visibleItemMain?item:''}
                  </ul>
                    {this.state.visibleMobMenu?mobileMenu:''}

              </div>


        </div>
      </div>

        {this.state.isOpen?popUpMenuContainer:''}

        {this.state.sizeMin >= document.documentElement.clientWidth?downMobileMenu:''}

      
    </>

  )
}




}

export default Menu;

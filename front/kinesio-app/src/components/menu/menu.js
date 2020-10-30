import React, {Component} from 'react';
import './menu.css';


class Menu extends Component {
constructor(props){
  super(props);
  this.isOpen = this.isOpen.bind(this);
  this.state = {
    listItem:[],
    sizeMax:768,
    sizeMin:450,
    visibleMobMenu:false,
    visibleItemMain:true,
    isOpen:false,
    iconMenu:'iconMenuOpen',
    menuSticky:'absolute',
    visibleMenuSticky:false
  }

}

componentDidMount(){

  var listItem, resize, visible;


  listItem = [
    {
      name:'Item1',
      url:'#1'
    },
    {
      name:'Item2',
      url:'#2'
    },
    {
      name:'Item3',
      url:'#3'
    },
    {
      name:'Item4',
      url:'#4'
    },
    {
      name:'Item5',
      url:'#5'
    }
  ];
  this.setState({listItem:listItem});

  visible = (e, w) => {
    this.setState({ visibleItemMain:w, visibleMobMenu:e, isOpen:false });
  }

var logoBox = document.getElementsByClassName('logoBox');

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


  var memory=0;

  var scrollPage = () => {

      var scrollPageSum = window.pageYOffset || document.documentElement.scrollTop; //Узнаем величину прокрутки страницы

          if (document.documentElement.clientWidth > 630) {

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


isOpen = () => {

  this.setState( { isOpen:!this.state.isOpen,  iconMenu:this.state.iconMenu === 'iconMenuOpen'?'iconMenuClose':'iconMenuOpen'});

}



render(){

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop; //Узнаем величину прокрутки страницы

  var item = this.state.listItem.map(
    (item, i) =>{
      return  <a key={i} href={item.url} rel="noopener noreferrer"><li key={i} >{item.name}</li></a>
    }
  );

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
    <a href="https://wa.me/+79653121776?text=urlencodedtext" rel="noopener noreferrer" target="_blank"><div className="stickyWhatsapp"></div></a>
    <a href="tg://resolve?domain=NataDerevyanskaya" rel="noopener noreferrer" target="_blank"><div className="stickyTelegram m24-l"></div></a>
    <a href="viber://chat?number=79774147477" rel="noopener noreferrer" target="_blank"><div className="stickyViber m24-l"></div></a>


  </div>

  <a href="mailto:iderevyansky@yandex.ru?subject=Мое письмо&body=Мой текст в этом письме" rel="noopener noreferrer" target="_blank"><div className="btnSticky"></div></a>
</>
);

var btn = (

  <div onClick={()=>{this.props.statusPopUp(true)}} className="btnSticky"></div>

);


  var stickyBox = (

    <div className="menuContainer menuContainerAnimation" style={{position:this.state.menuSticky, zIndex:'1'}}>
    <div className="menuContent">

        <div className="logoBox"></div>

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



              <div className="logoBox"></div>



              <div className="itemBox">

                  <ul className="f-w-600 ul">
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

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
    iconMenu:'iconMenuOpen'
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


  resize = () =>{

  var sizeWindow =  document.documentElement.clientWidth;
  var logoBox = document.getElementsByClassName('logoBox');

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

    resize()
    window.addEventListener('resize', ()=>{resize(); this.setState({ isOpen:false, iconMenu:'iconMenuOpen' })});
    window.addEventListener('scroll', ()=>{ this.setState({ isOpen:false, iconMenu:'iconMenuOpen' })} );


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

  return(

    <>

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

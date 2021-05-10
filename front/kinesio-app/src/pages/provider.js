import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import MainOld from './main/MainOld';

import Main from './main/Main';
import WhatIs from './whatIsKineziology/WhatIs';
import About from './about/About';
import Product from './product/Product';
import News from './news/News';
import NewsView from './newsView/NewsView';
import Page404 from './404/page404';

// import CallBack from './callBack/callBack';


class Provider extends Component {


  render(){

    // <CallBack view="dark" />

    // <Main statusPopUp={this.props.statusPopUp}/>
    // <WhatIs text='WhatIsKineziology'/>
    // <About text='About'/>
    // <Product text='Product'/>
    // <News text='News' />
    // <NewsView text='NewsView'/>

    return(
       
            <Switch>
                <Route exact path='/'>
                    <Main statusPopUp={this.props.statusPopUp} />
                </Route>
                <Route exact path='/old'>
                    <MainOld statusPopUp={this.props.statusPopUp} />
                </Route>
                <Route path='/whatIs'>
                    <WhatIs statusPopUp={this.props.statusPopUp} />
                </Route>
                <Route path='/about'>
                    <About text='About'/>
                </Route>
                <Route path='/product'>
                    <Product text='Product'/>
                </Route>
                <Route exact path='/news'>
                    <News text='News'/>
                </Route>
                <Route strict path='/news/:id'>
                    <NewsView text='NewsView'/>
                </Route>
                <Route path='*'>
                  <Page404/>
                </Route>
            </Switch>
    )


  }     


}


export default Provider;

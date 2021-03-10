import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import MainOld from '../pages/main/MainOld';

import Main from '../pages/main/Main';
import WhatIs from '../pages/whatIsKineziology/WhatIs';
import About from '../pages/about/About';
import Product from '../pages/product/Product';
import News from '../pages/news/News';
import NewsView from '../pages/newsView/NewsView';
import Page404 from '../pages/404/page404';

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

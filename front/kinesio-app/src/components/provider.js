import React, { Component } from 'react';

import Main from '../pages/main/Main';
// import CallBack from './callBack/callBack';


class Provider extends Component {


  render(){

    // <CallBack view="dark" />
    return(
        <Main statusPopUp={this.props.statusPopUp}/>
    )


  }


}


export default Provider;

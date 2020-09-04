import React, {Component} from 'react';
import './App.css';
import PopUp from './components/popUpBlocks/PopUp';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      statusPopUp:true
    }

  }


  statusPopUp = (q) => {
    this.setState({statusPopUp:q});
    console.log(this.state.statusPopUp);
  };


  render(){

    return (

            <>

            <PopUp statusPopUp={this.statusPopUp}/>
            <div className="BGtest"></div>

            </>

    );


  }

}

export default App;

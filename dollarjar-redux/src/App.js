import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  render(){
    console.log(this.props);
    return(
        <div className="App">
        <h1>My Name Is {this.props.myName}</h1>
    </div>
    );
}

}
const mapStatetoProps = (state) =>{
  return{
    myName:state.name
  }
}

export default connect(mapStatetoProps)(App);

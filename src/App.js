import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    person:[
      {name:'iddimsangi'},
      {name:'harith'}
    ],
    otherState:'im the other state'
  }
   
  
  switchHandler = () =>{
    // console.log('you clicked');
    this.setState({
      person:[
        {name:'iddi Adam'},
        {name:'harith iddi'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>Welcome to react software devs</h1>
       <button onClick={this.switchHandler}>switch</button>
      <Person name={this.state.person[0].name} />
      <Person name="harith" />
      </div>
    );
  }
}

export default App;

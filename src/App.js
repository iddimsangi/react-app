import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';



const app = (props) =>{
 const [ personsState, setPersonsState ] = useState( {
    person:[
      {name:'iddimsangi'},
      {name:'harith'}
    ],
    otherState:'im the other state'
  });
   
  useState('another state properties');
  const [x, y] = useState('heyhey');
  console.log(y);
  console.log(personsState);
 const switchHandler = () =>{
    // console.log('you clicked');
    setPersonsState({
      person:[
        {name:'iddi Adam'},
        {name:'harith iddi'}
      ]
    })
  }
 
    return (
      <div className="App">
       <h1>Welcome to react software devs</h1>
       <button onClick={switchHandler}>switch</button>
      <Person name={personsState.person[0].name} />
      <Person name="harith" />
      </div>
    );
  }


export default app;

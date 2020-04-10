import React, { useState } from 'react';
import logo from './logo.svg';
import {classes} from './App.module.css';

import {Validation} from './validationComponent';

function App() {
  const [lengthObj,setLengthObj] = useState({charlength:0, character:''});
  let listComp = null;
  const maxLengthHandler = (props) => {
      const updatedObj = {...lengthObj};
      updatedObj.character = props.target.value;
      updatedObj.charlength = props.target.value.length;
      setLengthObj(updatedObj);
      //console.log();
  }

  const updateValue = (updatedChars) => {
      const currObj = {...lengthObj};
      currObj.character = updatedChars;
      currObj.charlength = updatedChars.length;
      console.log(currObj);
      setLengthObj(currObj);
  }

  return (
    <div >
      <input type="text" placeholder="Enter the value" onChange={maxLengthHandler.bind(this)}/>

      <p>Length of the entered character: {lengthObj.charlength}</p>

      <Validation charlength={lengthObj.charlength} character={lengthObj.character} updateChar = {updateValue}></Validation>
    </div>
  );
}

export default App;

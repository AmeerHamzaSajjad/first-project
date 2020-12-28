import React, { useState } from 'react';
import Message from './Message.js';
import './App.css';

function App() {

let [count, setCount] = useState(0);
let [isMorning, setMorning] = useState(true);
  return (
    <div className= {`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning? 'Morning' : 'Night'}</h1>
      <Message counter = {count}/>
      <br/>
      <button onClick = {
        ()=>setCount(count = count+1)
      }>Update Counter</button>

      <button onClick = {
        ()=>setMorning(!isMorning)
        }>Update color</button>
    </div>
  );
}

export default App;

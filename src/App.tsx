import React, {useState, useEffect} from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import { counterSlice } from './features/counter/counterSlice';
import CleanUp from "./CleanUp";
const  App: React.FC = () => {
  const [status, setStatus] = useState<string | number>("text");
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);


  const onChangeHundler =(e:React.ChangeEvent<HTMLInputElement>) =>{
    setInput(e.target.value)
  }
  useEffect(()=> {
    console.log("useEffect in App conp invoke") 
    document.title = `current value is ${counter}`;
  },[counter]
  );
  //[] はマウントした時
  //[counter]はcounter,だけのスコp−う

  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={() => setStatus(1)}>button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHundler}></input>
        <h4>{counter}</h4>
        <button onClick={() => setCounter((preCounter)=>preCounter+1)}>set counter</button>
        
        {display && <CleanUp></CleanUp>}
        <button onClick={() => setDisplay(!display)}> toggle disp</button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;

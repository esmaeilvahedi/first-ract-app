/** @format */

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Hello from "./hello";
import Inject1 from "./inject1";

function App() {
  function sendMessage(str) {
    //alert(str);
  }
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const fun = async () => {
      //await alert(counter);
    };
    fun();
  }, []);

  function chanegMessage(str) {
    setCounter(str);
    alert(str);
  }

  // empty => onmount,  [megdar]=> watch
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <p onClick={() => setCounter(counter + 1)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hello username="ali"></Hello>
      <Hello username={counter}></Hello>
      <Hello clickHandler={chanegMessage}></Hello>
      <Inject1></Inject1>
    </div>
  );
}

export default App;

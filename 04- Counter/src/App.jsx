import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // Assignment
    if (counter == 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    // Assignment
    if (counter == 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Coffee Or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>+ Value {counter}</button>
      <br />
      <button onClick={subValue}>- Value {counter}</button>
      <br />
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;

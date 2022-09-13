import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [upper, setUpper] = useState(150);
  const [lower, setLower] = useState(60);

  function calculate() {
    const result1 = (220 - age) * 0.85;
    setUpper(result1);
    const result2 = (220 - age) * 0.65;
    setLower(result2);
  }

  return (
    <div id="container">
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Heart rate limits</label>
          <output type="number">
            {lower.toFixed(0)}-{upper.toFixed(0)}
          </output>
        </div>
        <button type="button" onClick={calculate}>
          Calculate
        </button>
      </form>
    </div>
  );
}

export default App;

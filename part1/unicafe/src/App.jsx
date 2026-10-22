import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const g = good + 1;
    setGood(g);
  };

  const handleNeutral = () => {
    const n = neutral + 1;
    setNeutral(n);
  };

  const handleBad = () => {
    const b = bad + 1;
    setBad(b);
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text={"good"} />
        <Button onClick={handleNeutral} text={"neutral"} />
        <Button onClick={handleBad} text={"bad"} />
      </div>

      <div>
        <h1>Statistics</h1>
        <div>good : {good}</div>
        <div>neutral : {neutral}</div>
        <div>bad : {bad}</div>
      </div>
    </div>
  );
};

export default App;

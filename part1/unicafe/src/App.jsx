import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  );
};

const Statistics = (props) => {
  console.log(props);
  if (props.all === 0)
    return (
      <div>
        <br></br>
        <br></br>
        No feedback given
      </div>
    );
  let average = ((props.good - props.bad) / props.all) * 100;
  let positive = (props.good / props.all) * 100;
  if (props.all === 0) {
    average = 0;
    positive = 0;
  }

  return (
    <>
      <h1>Statistics</h1>
      <div>Good : {props.good}</div>
      <div>Neutral : {props.neutral}</div>
      <div>Bad : {props.bad}</div>
      <div>All : {props.all}</div>
      <div>Average : {average} %</div>
      <div>Positive : {positive} %</div>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    const g = good + 1;
    const a = all + 1;
    setAll(a);
    setGood(g);
  };

  const handleNeutral = () => {
    const n = neutral + 1;
    const a = all + 1;
    setAll(a);
    setNeutral(n);
  };

  const handleBad = () => {
    const b = bad + 1;
    const a = all + 1;
    setAll(a);
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;

import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {" "}
      {text} : {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  console.log({ good, neutral, bad, all });
  if (all === 0)
    return (
      <div>
        <br></br>
        <br></br>
        No feedback given
      </div>
    );
  let average = ((good - bad) / all) * 100;
  let positive = (good / all) * 100;
  if (all === 0) {
    average = 0;
    positive = 0;
  }

  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text={"Good"} value={good} />
      <StatisticLine text={"Neutral"} value={neutral} />
      <StatisticLine text={"Bad"} value={bad} />
      <StatisticLine text={"All"} value={all} />
      <StatisticLine text={"Average"} value={average} />
      <StatisticLine text={"Positive"} value={positive} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleFeedback = (feedback) => {
    if (feedback === "good") {
      const g = good + 1;
      const a = all + 1;
      setAll(a);
      setGood(g);
    }
    if (feedback === "neutral") {
      const n = neutral + 1;
      const a = all + 1;
      setAll(a);
      setNeutral(n);
    }

    if (feedback === "bad") {
      const b = bad + 1;
      const a = all + 1;
      setAll(a);
      setBad(b);
    }
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button
          onClick={() => {
            handleFeedback("good");
          }}
          text={"good"}
        />
        <Button
          onClick={() => {
            handleFeedback("neutral");
          }}
          text={"neutral"}
        />
        <Button
          onClick={() => {
            handleFeedback("bad");
          }}
          text={"bad"}
        />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;

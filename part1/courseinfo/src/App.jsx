export const Header = (course) => {
  return <h1>{course.name}</h1>;
};
let total = 0;
export const Part = (props) => {
  total += props.exercises;
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

export const Content = ({ parts }) => {
  // console.log(parts);
  return parts.map((p) => {
    return <Part key={p.name} name={p.name} exercises={p.exercises} />;
  });
};

export const Total = ({ parts }) => {
  let t = 0;
  parts.map((p) => {
    return (t = t + p.exercises);
  });
  return <p>{t}</p>;
};

// step 5 :
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

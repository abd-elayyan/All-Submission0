const Course = ({ course }) => {
  console.log("course component : ", course);

  let total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {" "}
      <h1>{course.name}</h1>
      {course.parts.map((p) => {
        return (
          <p key={p.id}>
            {p.name} {p.exercises}
          </p>
        );
      })}
      <h4>total of {total} exercises</h4>
    </div>
  );
};
export default Course;

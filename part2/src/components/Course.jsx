const Course = ({ course }) => {
  console.log("course component : ", course);
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
    </div>
  );
};
export default Course;

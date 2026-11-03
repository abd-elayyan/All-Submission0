import Delete from "./Delete";

const Persons = ({ personsToShow, onDelete }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.id}>
          name: {person.name} number: {person.number}
          <Delete id={person.id} onDelete={onDelete} />
        </p>
      ))}
    </div>
  );
};
export default Persons;

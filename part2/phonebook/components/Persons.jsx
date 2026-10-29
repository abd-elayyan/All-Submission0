const Persons = ({ personsToShow }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.name}>
          name: {person.name} number: {person.number}
        </p>
      ))}
    </div>
  );
};
export default Persons;

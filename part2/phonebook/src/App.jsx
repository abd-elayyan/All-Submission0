import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  console.log(persons);

  const submitForm = (event) => {
    event.preventDefault();
    console.log("sumit form persons", persons);
    const theNewPerson = { name: newName };
    setPersons(persons.concat(theNewPerson));
    setNewName("");
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={submitForm}>
        <div>
          name:
          <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((ps, index) => {
          return <p key={index}>{ps.name}</p>;
        })}
      </div>
    </div>
  );
};

export default App;

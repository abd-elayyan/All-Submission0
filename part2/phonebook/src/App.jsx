import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0799" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    // console.log("sumit form persons", persons);

    const name = newName.trim();
    let isExist = persons.some((person) => person.name === name);

    if (isExist) {
      alert(`${newName} is alreddy added`);
      return;
    }

    if (name === "") {
      alert(`you cannot add an empty name`);
      return;
    }

    const theNewPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(theNewPerson));
    setNewName("");
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={submitForm}>
        <div>
          name:
          <input value={newName} onChange={handleChangeName} />
        </div>
        <br></br>
        <div>
          phone number :
          <input
            type="number"
            value={newNumber}
            onChange={handleChangeNumber}
          />
        </div>{" "}
        <br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((ps, index) => {
          return (
            <>
              <p key={index}>
                name:{ps.name} number:
                {ps.number}
              </p>
              <br></br>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;

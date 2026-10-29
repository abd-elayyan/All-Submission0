import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0799" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

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
  const handleSearch = (event) => {
    let searched = event.target.value.trim().toLowerCase();
    console.log(searched);
    setSearch(searched);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(search),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={submitForm}>
        {/* name : */}
        <div>
          name:
          <input value={newName} onChange={handleChangeName} />
        </div>
        <br></br>
        {/* phone */}
        <div>
          phone number :
          <input
            type="number"
            value={newNumber}
            onChange={handleChangeNumber}
          />
        </div>
        <br></br>
        {/* submotion */}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        search :
        <input type="text" onChange={handleSearch} />
      </div>

      <h2>Numbers</h2>
      <div>
        {personsToShow.map((ps, index) => {
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

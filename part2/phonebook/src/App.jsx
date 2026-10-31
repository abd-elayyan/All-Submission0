import { useEffect, useState } from "react";
import PersonForm from "../components/PersonForm";
import Filter from "../components/Filter";
import Persons from "../components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("effect");
      setPersons(response.data);
    });
  }, []);

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
    setNewNumber("");
  };
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearch = (event) => {
    let searched = event.target.value.trim().toLowerCase();
    // console.log(searched);
    setSearch(searched);
  };
  const personsToShow = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(search),
  );
  // console.log(personsToShow);
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        submitForm={submitForm}
      />
      <Filter handleSearch={handleSearch} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;

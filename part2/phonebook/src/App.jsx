import { useEffect, useState } from "react";
import PersonForm from "../components/PersonForm";
import Filter from "../components/Filter";
import Persons from "../components/Persons";
import pServices from "./services/persons";
import Notification from "../components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({
    message: "",
    successful: true,
  });
  // const [redMessage, setRedMessage] = useState("");

  useEffect(() => {
    pServices.getAll().then((returned) => {
      console.log("welcome to the page ");
      setPersons(returned);
    });
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    // console.log("sumit form persons", persons);

    const name = newName.trim();
    let isExist = persons.find((person) => person.name === name);

    if (name === "") {
      alert(`you cannot add an empty name`);
      return;
    }
    let wantUpdate = "";
    if (isExist) {
      wantUpdate = confirm(
        `${newName} is alreddy added , do you want to update his number ?`,
      );
      if (wantUpdate) {
        const theNewPerson = { name: newName, number: newNumber };
        pServices
          .update(isExist.id, theNewPerson)
          .then((returnedPerson) => {
            setPersons((previous) =>
              previous.map((person) =>
                person.id === returnedPerson.id ? returnedPerson : person,
              ),
            );
            setNewName("");
            setNewNumber("");
          })
          .catch(() => {
            let m = {
              message: `The person you want to update has been deleted previously`,
              successful: false,
            };
            setMessage(m);
            setTimeout(() => {
              setMessage("");
            }, 3000);
            setPersons(persons.filter((person) => person.id !== isExist.id));
          });
        let m = {
          message: `person :${theNewPerson.name} has updateed his number`,
          successful: true,
        };
        setMessage(m);
        setTimeout(() => {
          let m = {
            message: ``,
            successful: true,
          };
          setMessage(m);
        }, 3000);
      } else console.log("no person has been added or modified.");
    } else {
      const theNewPerson = { name: newName, number: newNumber };
      pServices.create(theNewPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
      let m = {
        message: `person :${theNewPerson.name} has been added successfully`,
        successful: true,
      };
      setMessage(m);

      setTimeout(() => {
        let m = {
          message: ``,
          successful: true,
        };
        setMessage(m);
      }, 3000);
    }
  };

  const handleDelete = (id) => {
    const personToDelete = persons.find((p) => p.id === id);
    if (
      confirm(
        `are you sure you want to delete the following person : ${personToDelete.name}`,
      )
    ) {
      pServices
        .deletePerson(id)
        .then(() => {
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id),
          );
        })
        .catch(() => {
          alert("The user was already deleted");
        });
      let m = {
        message: `person :${personToDelete.name} has been deleted successfully`,
        successful: true,
      };
      setMessage(m);

      setTimeout(() => {
        let m = {
          message: ``,
          successful: true,
        };
        setMessage(m);
      }, 5000);
    }
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
      <h1>Phonebook</h1>
      {message.message && <Notification message={message} />}{" "}
      <Filter handleSearch={handleSearch} />
      <h2>add a new </h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        submitForm={submitForm}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;

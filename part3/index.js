const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
const generateID = () => {
  const maxID =
    persons.length > 0
      ? Math.max(...persons.map((person) => Number(person.id)))
      : 0;
  return String(maxID + 1);
};
app.get("/api/persons", (req, res) => {
  res.json(persons);
});
app.get("/info", (req, res) => {
  res.send(
    `Phonebook has info for ${persons.length} people
      <br></br>  ${new Date()}`,
  );
});
app.get("/api/persons/:id", (req, res) => {
  const id = String(req.params.id);
  const person = persons.find((p) => p.id === id);
  if (person) {
    console.log(person);
    res.json(person);
  } else {
    console.log(`The person with id ${id} is not found`);
    res.status(404).end();
  }
});
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);
  if (!person) {
    console.log(`there is no preson with id ${id}`);
    res.status(404).json({ message: `no person with id ${id}` });
  } else {
    persons = persons.filter((person) => person.id !== id);
    res.status(200).json({
      persons: persons,
      message: `person with id ${id} has been deleted `,
    });
  }
});
app.post("/api/persons", (req, res) => {
  const body = req.body;
  console.log(body);
  if (persons.find((p) => p.name === body.name)) {
    res.status(400).json({ message: "Name already exist " });
  } else if (!body.name) {
    res.status(400).json({ message: "Missing name" });
  } else if (!body.number) {
    res.status(400).json({ message: "Missing number" });
  }
  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateID(),
  };
  persons = persons.concat(newPerson);
  res.json({ persons, message: `New person added successfully` });
});
const PORT = 3001;
app.listen(PORT);
console.log(`server on port ${PORT}`);

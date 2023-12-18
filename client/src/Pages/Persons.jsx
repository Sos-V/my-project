import { useEffect, useState } from "react"
import PersonsTable from "../Components/PersonsTable";

const deletePerson = (id) => {
  return fetch(`http://localhost:9090/persons/${id}`,
    { method: "DELETE" })
    .then((res) =>
      res.json()
    );
};
const fetchPersons = () => {
  return fetch("http://localhost:9090/persons").then((res) => res.json());
};


export default function Persons() {

  const [persons, setPersons] = useState();
  

  useEffect(() => {
    fetchPersons()
      .then(data => setPersons(data), console.log(persons))

  }, [])
  const handleDelete = (id) => {
    deletePerson(id);
  }
  return persons && (<div>
    <PersonsTable
      persons={persons}
      onDelete={handleDelete} />
  </div>)
}
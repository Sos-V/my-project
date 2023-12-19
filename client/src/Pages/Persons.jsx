import { useEffect, useState } from "react"
import PersonsTable from "../Components/PersonsTable";




export default function Persons() {
  const [persons, setPersons] = useState();

  const deletePerson = async (id) => {
    console.log(id);
    const res = await fetch(`http://localhost:9090/persons/${id}`,
      { method: "DELETE" });
    return await res.json();
  };
  const fetchPersons = async () => {
    const res = await fetch("http://localhost:9090/persons");
    return await res.json();
  };


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
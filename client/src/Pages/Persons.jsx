import { useEffect, useState } from "react"
import PersonsTable from "../Components/PersonsTable";




export default function Persons() {

  const [persons, setPersons] = useState();


  const fetchPersons = async () => {
    const res = await fetch("http://localhost:9090/persons");
    const data = await res.json();
    return setPersons(data)
  };


  useEffect(() => {
    fetchPersons()

  }, [])

  

  return persons && (<div >
    <PersonsTable
      persons={persons}
       />
  </div>)
}
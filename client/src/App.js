import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [persons, setPersons] = useState();
  const [name, setName] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [age, setAge] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9090/persons")
      .then(res => res.json())
      .then(data => setPersons(data), console.log(persons))

  }, [clicked])

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9090/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "name": name, "age": age }),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <button onClick={() => clicked? setClicked(false) : setClicked(true)}>GetAllPersons</button>
      <form className="Form" onSubmit={onSubmit}>

        <div className="control">
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
          />
        </div>
        <div color="red">
          <label htmlFor="age">Age:</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            age="name"
            id="age"
          />
        </div>
        <button >save</button>
      </form >
    </>
  );
};

export default App;

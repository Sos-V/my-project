import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function PersonCreator() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [sport, setSport] = useState(null);
  const navigator = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && age && sport) {
      try {
        await fetch('http://localhost:9090/persons', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "name": name, "age": age, "sport": sport }),
        });


        navigator('/');

      } catch (error) {
        console.error('Error:', error);
      }
    } else alert("please fill all fields")

  };


  return (
    <>

      <form className="form" onSubmit={onSubmit}>

        <div >
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
          />
        </div>
        <div >
          <label htmlFor="age">Age:</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}

          />
        </div>
        <div >
          <label htmlFor="sport">kind of sport:</label>
          <select
            
            onChange={(e) => setSport(e.target.value)}>
            <option></option>
            <option value="Basketball">Basketball</option>
            <option value="Volleyball">Volleybal</option>
            <option value="Tischtennis">Tischtennis</option>
            <option value="Badminton">Badminton</option>
            <option value="Fussball">Fußball</option>

          </select>
        </div>
        <button className="save">save</button>

      </form >

    </>
  );
};

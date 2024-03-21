import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PersonUpdater() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sport, setSport] = useState("");

    useEffect(() => {
        fetch(`http://localhost:9090/persons/${id}`)
            .then((res) => res.json())
            .then((person) => {
                setName(person.name);
                setAge(person.age);
                setSport(person.sport);

            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            age: age,
            sport: sport
        }

        fetch(`http://localhost:9090/persons/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)

        }).then(() => navigate("/"));

    };

    return (

        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div>
                <label>Sport:</label>
                <select value={sport}
                    onChange={(e) => setSport(e.target.value)}>

                    <option value="Basketball">Basketball</option>
                    <option value="Volleyball">Volleybal</option>
                    <option value="Tischtennis">Tischtennis</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Fussball">Fußball</option>

                </select>
            </div>
            <button type="submit"  >Update</button>
        </form>

    );
}
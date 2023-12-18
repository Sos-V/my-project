import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PersonUpdater() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
   
    useEffect(() => {
        fetch(`http://localhost:9090/persons/${id}`)
            .then((res) => res.json())
            .then((person) => {
                setName(person.name);
                setAge(person.age);
               
            })
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            age: age
        }
        if (name && age ) {
            fetch(`http://localhost:9090/persons/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)

            }).then(() => navigate("/persons"));
        } else
            alert("please fill all fields");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                Age: <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} />
                 <button type="submit"  >Update</button>
            </form>
        </>
    );
}
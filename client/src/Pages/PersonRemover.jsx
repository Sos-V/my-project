import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function PersonRemover() {

    const [person, setPerson] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9090/persons/${id}`)
            .then(res => res.json())
            .then(data => setPerson(data))

    }, [id])

    const deletePerson = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9090/persons/${id}`, { method: "DELETE" })
            .then(() => navigate("/persons"))
            alert("the person is deleted")
    }

    return person && <div>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>sportart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.sport}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <form className="Attention" onSubmit={deletePerson}>
            Do you want delete this person?

            <button className="redButton" type="submit">yes</button>
            <button className="greenButton" onClick={()=>navigate("/persons ")}>no</button>
        </form>
    </div>

}
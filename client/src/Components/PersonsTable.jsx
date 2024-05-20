import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

export default function PersonsTable({ persons }) {

    const [filteredPersons, setPersons] = useState(persons);

    const filterPersons = (sport) => {
        if (sport === "all") { setPersons(persons) }
        else {
            setPersons(persons.filter(person => person.sport === sport));
        }
    }

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>
                            sportart
                            <select onChange={(e) => filterPersons(e.target.value)}>
                                <option value="all">all</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Volleyball">Volleyball</option>
                                <option value="Tischtennis">Tischtennis</option>
                                <option value="Badminton">Badminton</option>
                                <option value="Fussball">Fußball</option>

                            </select>
                        </th>
                        <th>changes</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        filteredPersons.map(person => (

                            <tr>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                                <td>{person.sport}</td>



                                <td>
                                    <Link to={`/update/${person.id}`}>_
                                        <button>Update</button>_
                                    </Link>

                                    <Link to={`/delete/${person.id}`}>
                                        <button >Delete</button>
                                    </Link>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>);
}
import { Link } from "react-router-dom";
import "../App.css";
export default function PersonsTable({ persons, onDelete }) {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>sportart</th>
                        <th>changes</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        persons.map(person => (

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
                                        <button type="button" onClick={() => onDelete(person.id)}>
                                            Delete
                                        </button>
                                    </Link>
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>);
}
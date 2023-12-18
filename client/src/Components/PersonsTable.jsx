import { Link } from "react-router-dom";
import "../App.css";
export default function PersonsTable({ persons, onDelete }) {
    return (
        
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            persons.map(person => (
                                
                                <tr>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>

                                    <td>
                                        <Link to={`/update/${person.id}`}>__
                                            <button>Update</button>_
                                        </Link>
                                        <button onClick={() => onDelete(person.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                               
                            ))
                        }
                   
                </tbody>
            </table>
        
    );
}
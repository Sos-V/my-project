import "./App.css";
import { Outlet,Link } from "react-router-dom";



const App=()=> {

  return (
    <div>
      <nav >
        <ul>
          <li >
            <Link to="/persons">
              <button >Show all Persons Show</button>
              </Link>
          </li>
        </ul>
        <ul>
          <li >
            <Link to="/createPerson">
              <button>create new Person</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )

}

export default App;

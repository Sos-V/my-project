import "./App.css";
import { Outlet,Link } from "react-router-dom";
import "./ARARAT-Logo.png";
import "./image.png";



const App=()=> {

  return (
    <div className="control"> 
       
         
      <nav className="layout">
       
            <Link to="/persons">
              <button className="left-button">Show all Members</button>
              </Link>
            <Link to="/createPerson">
              <button className="right-button">create new Member</button>
            </Link>    
           
      </nav>
      <Outlet />
    </div>
  )

}

export default App;

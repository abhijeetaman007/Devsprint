import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";   //using bootstrap
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage"
import Addmovie from "./components/Addmovie"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">

          <Link to="/" className="navbar-brand" style={{fontFamily: 'Bangers',fontSize:"2rem"}}> MOVE @ EASE </Link>

          <div className="collpase navbar-collapse">

            <ul className="navbar-nav mr-auto">

              <li className="navbar-item">
                <Link to="/" className="nav-link" style={{fontFamily:"Helvetica",opacity:"150%",}}>HOME</Link>
              </li>

              <li className="navbar-item">
                <Link to="/create" className="nav-link" style={{fontFamily:"Helvetica",opacity:"150%",}}>ADD MOVIE</Link>
              </li>
              
            </ul>
            
          </div>
          
        </nav>
        <br/>
       
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/edit/:id" component={EditTodo} /> */}
        <Route path="/create" component={Addmovie} />
      </div>
    </Router>
  );
}
}

export default App;
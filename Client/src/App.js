import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";   //using bootstrap
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage"
import Addmovie from "./components/Addmovie"
import Viewallmovies from "./components/Viewallmovies"
import './style.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">

          <Link to="/" className="navbar-brand" style={{fontFamily: 'Bangers',fontSize:"2rem"}}> MOViE @ eASE </Link>

          <div className="collpase navbar-collapse">

            <ul className="navbar-nav mr-auto">

              <li className="navbar-item">
                <Link to="/" className="nav-link" style={{fontFamily:"Helvetica",color:"white"}}>HOME</Link>
              </li>

              <li className="navbar-item">
                <Link to="/create" className="nav-link" style={{fontFamily:"Helvetica",color:"white"}}>ADD MOVIES</Link>
              </li>
              <li className="navbar-item">
                <Link to="/viewall" className="nav-link" style={{fontFamily:"Helvetica",color:"white"}}>❤️VIEW ADDED MOVIES❤️</Link>
              </li>
              
            </ul>
            
          </div>
          
        </nav>
        <br/>
       
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/edit/:id" component={EditTodo} /> */}
        <Route path="/create" component={Addmovie} />
        <Route path="/viewall" component={Viewallmovies}/>
      </div>
    </Router>
  );
}
}

export default App;
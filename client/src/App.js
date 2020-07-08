import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";   //using bootstrap
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage"
import Addmovie from "./components/Addmovie"
import Viewallmovies from "./components/Viewallmovies"
import Filter from "./components/filterall"
import Filterapi from "./components/filter_api"
import Filterapi_1 from "./components/filter_api_1"
import Delete from "./components/delete_movies"
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

              <li className="navbar-item" class="key"> 
                <Link to="/" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >HOME</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/filterapi_1" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >VIEW BEST OF ALL TIME</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/filterapi" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >FILTER MOVIES BY DATES</Link>
              </li>
              <li className="navbar-item" class="key">
                <Link to="/create" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >ADD YOUR MOVIES</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/filter" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >FILTER ADDED MOVIES</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/viewall" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >VIEW ALL ADDED MOVIES</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/delete" className="nav-item nav-link" href="#" style={{fontFamily: 'Bangers',fontSize:"1rem"}} >DELETE YOUR MOVIES</Link>
              </li>
            </ul>
            
          </div>
          
        </nav>
        <br/>
       
        <Route path="/" exact component={Homepage} />
        <Route path="/create" component={Addmovie} />
        <Route path="/viewall" component={Viewallmovies}/>
        <Route path="/filter" component={Filter}/>
        <Route path="/filterapi" component={Filterapi}/>
        <Route path="/filterapi_1" component={Filterapi_1}/>
        <Route path="/delete" component={Delete}/>
      </div>
    </Router>
  );
}
}

export default App;


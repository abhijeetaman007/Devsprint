import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";   //using bootstrap
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage"
import Addmovie from "./components/Addmovie"
import Viewallmovies from "./components/Viewallmovies"
// import filter_year from "./components/filter"
// import filtergenre from "./components/filter_genre"
import Filter from "./components/filterall"
import Filterapi from "./components/filter_api"
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
                <Link to="/" className="nav-item nav-link" href="#" style={{fontFamily:"Helvetica",color:"white"}}>HOME</Link>
              </li>

              
              {/* <li className="navbar-item">
                <Link to="/filter/year" className="nav-link" style={{fontFamily:"Helvetica",color:"white"}}>FILTER ADDED MOVIES BY YEAR</Link>
              </li>
              <li className="navbar-item">
                <Link to="/filter/genre" className="nav-link" style={{fontFamily:"Helvetica",color:"white"}}>FILTER ADDED MOVIES BY GENRE</Link>
              </li> */}
              <li className="nav-item" class="key">
                <Link to="/filterapi" className="nav-item nav-link" href="#" style={{fontFamily:"Helvetica",color:"white"}}>FILTER MOVIES</Link>
              </li>
              <li className="navbar-item" class="key">
                <Link to="/create" className="nav-item nav-link" href="#" style={{fontFamily:"Helvetica",color:"white"}}>ADD YOUR MOVIES</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/filter" className="nav-item nav-link" href="#" style={{fontFamily:"Helvetica",color:"white"}}>FILTER ADDED MOVIES</Link>
              </li>
              <li className="nav-item" class="key">
                <Link to="/viewall" className="nav-item nav-link" href="#" style={{fontFamily:"Helvetica",color:"white"}}>VIEW ALL ADDED MOVIES</Link>
              </li>
              
            </ul>
            
          </div>
          
        </nav>
        <br/>
       
        <Route path="/" exact component={Homepage} />
        {/* <Route path="/edit/:id" component={EditTodo} /> */}
        <Route path="/create" component={Addmovie} />
        <Route path="/viewall" component={Viewallmovies}/>
        <Route path="/filter" component={Filter}/>
        <Route path="/filterapi" component={Filterapi}/>
        {/* <Route path="/filter/year" component={filter_year}/>
        <Route path="/filter/genre" component={filtergenre}/> */}
      </div>
    </Router>
  );
}
}

export default App;


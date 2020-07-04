import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
      searchTerm:""
    };
  }
  
  handleSubmit = (e) => { 
    fetch(`http://www.omdbapi.com/?t=${this.state.searchTerm}&apikey=3da5a3c2`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: data})
    })
    
    e.preventDefault()
  }

  
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  render() {
    const { Title, Year, Poster } = this.state.moviesData;
    return (
      <div>
        <Header />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <div className="container">
          <h3>{Title}</h3>
          <h3>{Year}</h3>
          <img src={Poster} alt="character" />
        </div>
      </div>
    );
  }
}
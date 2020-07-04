import React, { Component } from "react";
import Header from "./Header";
import Searchmovie from "./Searchmovie";
import Movielist from "./Movielist";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
      searchTerm:"",
    };
  }
  
  handleSubmit = (e) => { 
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&apikey=3da5a3c2`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: [...data.Search]})
    })
    
    e.preventDefault()
  }

  
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

 
  render() {
    return (
      <div>
        <Header />
        <Searchmovie handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Movielist movies={this.state.moviesData}/>
      </div>
    );
  }
}
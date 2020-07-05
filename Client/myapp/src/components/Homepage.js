import React, { Component } from "react";
import Header from "./Header";
import Searchmovie from "./Searchmovie";
import Movielist from "./Movielist";
import Moviedetails from "./Moviedetails.js";
export default class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
      searchTerm:"",
      currmovie:null,
    };
  }  
  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=de6b4672f86ff0807b144f81ff753824&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: [...data.results]})
    })
    
    e.preventDefault()
  }

  
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  movieInfo=(id)=>{
    const chosenmovie=this.state.moviesData.filter((movie)=>{
      return movie.id==id
    });
    const newmovie=chosenmovie.length>0?chosenmovie[0]:null;
    this.setState({currmovie:newmovie})
  }
  goBack=()=>{
    this.setState({currmovie:null})
  }
 
  render() {
    return (
      <div>
      {this.state.currmovie==null ?<div>
          <Header />
          <Searchmovie handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <Movielist movieInfo={this.movieInfo} movies={this.state.moviesData} />
        </div>
        :<Moviedetails currmovie={this.state.currmovie} goBack={this.goBack}/>}
        
      </div>
    );
  }
}
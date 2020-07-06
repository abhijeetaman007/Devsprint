import React, { Component } from "react";
import Searchmovie from "./Searchmovie";
import Movielist from "./Movielist";
import Moviedetails from "./Moviedetails.js";
import Upcoming from "./UpcomingList";
import NowPlaying from "./NowPlaying";
import TopRated from "./Toprated";
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
  handleUpcoming = (e) => { 
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=de6b4672f86ff0807b144f81ff753824&language=en-US&page=1`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: [...data.results]})
    })
    
    e.preventDefault()
  }
  handleNowplaying = (e) => { 
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=de6b4672f86ff0807b144f81ff753824&language=en-US&page=1`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: [...data.results]})
    })
    
    e.preventDefault()
  }
  handleToprated= (e) => { 
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=de6b4672f86ff0807b144f81ff753824&language=en-US&page=1`)
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
 
      
      <div>
      {this.state.currmovie==null?
      <div>
      <Searchmovie handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <Upcoming handleUpcoming={this.handleUpcoming}/>
      <NowPlaying handleNowplaying={this.handleNowplaying}/>
      <TopRated handleToprated={this.handleToprated}/>
      <Movielist movieInfo={this.movieInfo} movies={this.state.moviesData} />
      </div>
      :<Moviedetails currmovie={this.state.currmovie} goBack={this.goBack}/>}</div>
      
        
      </div>
    );
  }
}
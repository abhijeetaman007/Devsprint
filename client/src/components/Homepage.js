import React, { Component } from "react";
import Searchmovie from "./Searchmovie";
import Movielist from "./Movielist";
import Moviedetails from "./Moviedetails.js";
import Upcoming from "./UpcomingList";
import NowPlaying from "./NowPlaying";
import TopRated from "./Toprated";
import Pagination from "./Pagination";
export default class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
      searchTerm:"",
      currmovie:null,
      totalResults:0,
      currentPage:1
    };
  }  
  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=de6b4672f86ff0807b144f81ff753824&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: [...data.results],totalResults:data.total_results})
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
 
  nextPage=(pageNumber)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=de6b4672f86ff0807b144f81ff753824&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ moviesData: [...data.results],currentPage:pageNumber})
    })
    
  
  }
  render() {
    const numberPages=Math.floor(this.state.totalResults/20);
    return (    
      <div>
      {this.state.currmovie==null?
      <div>
        <table>
          <tr>
            <td>
            <Upcoming handleUpcoming={this.handleUpcoming}/>
            </td>
            <td>
            <NowPlaying handleNowplaying={this.handleNowplaying}/>
            </td>
            <td>
            <TopRated handleToprated={this.handleToprated}/>
            </td>
            <td>
            <Searchmovie handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </td>
            </tr>
             
            </table>
        <br></br>
        <br></br>
      
      
      
      
      <Movielist movieInfo={this.movieInfo} movies={this.state.moviesData} />
      {this.state.totalResults>20?<Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/>:""}
      </div>
      :<Moviedetails currmovie={this.state.currmovie} goBack={this.goBack}/>}
      </div>
      
      
    );
  }
}
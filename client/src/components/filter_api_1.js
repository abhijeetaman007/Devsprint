//Filtering by genre and year: View Best of all time
import React, { Component } from 'react'
import axios from 'axios';

export class filter_api_1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:'Select Genre',
             year:'',
             movies:[],
             present:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }
    
    onChangeYear=(e)=>{
        this.setState({
            year: e.target.value
        })
    }
    
    
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=de6b4672f86ff0807b144f81ff753824&with_genres='+this.state.value+'&primary_release_year='+this.state.year)
        .then(res=>this.setState({
            movies:res.data.results
        }))
        .catch(function(error){
            console.log(error)
        })
        this.setState({
            present:true
        })
        
    }

    onButtonClicked=(e)=>{
        e.preventDefault()
        this.setState({
            value:'Select Genre',
            movies:[],
            year:'',
            present:false
        })

    }

    
    render() {
        if(!this.state.present){
        return (
            <div style={{marginLeft:"20px"}}>
                    <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Filter by genre and year</h3>
          <br></br>
          <select value={this.state.value} onChange={this.handleChange}>
            <option selected value="Select">Select Genre</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option> 
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        <br></br><br></br>
        </label>
        <input type="text" className="form-control col-md-3"placeholder="Enter year"  value={this.state.year} onChange={this.onChangeYear}/>
        <br/><br></br>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>

        </div>
        )
    }
    else{
        if(this.state.movies.length>0)
        {
            const {movies,value}=this.state
            return(
                <div style={{marginLeft:"20px"}}>
                    <h1>Movies:</h1>
                    <input  class="btn btn-primary" type="reset" value="Reset Filter" onClick={this.onButtonClicked}></input>
                    <br/>
                    <br/>
                    {movies.map(item => 
                        <div className="key" >
                        <img src={"http://image.tmdb.org/t/p/w185/"+item.poster_path}/>
                        <br/>
                        <br/>
                        <div className="col">
                        <h6>Title: {item.title}</h6>
                        <h6>Release Date:{item.release_date}</h6>
                        <h6>Overview:{item.overview}</h6>
                        <h6>Popularity:{item.popularity}</h6>
                        <h6>Vote Average:{item.vote_average}</h6>
                        </div>
                        <hr style={{borderWidth:"10px",width:"95%"}}></hr>
                    </div>)}
                        <input  class="btn btn-primary" type="reset" value="Reset Filter" onClick={this.onButtonClicked}></input>
                        <br/>
                        <br/>
                </div>             
        )
       }
       else
        {
            return(
                <div>
                        <br/>
                        <h4 styles={{fontStyle:"italic"}}>No Records found </h4>
                        <br/>
                        <input class="btn btn-primary" type="reset" value="Reset Filter"  onClick={this.onButtonClicked}></input>
                        <br/>
                        <br/>
                </div>   

            )
        }
    }
    }
}

export default filter_api_1

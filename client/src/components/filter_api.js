import React, { Component } from 'react'
import axios from 'axios';

export class filter_api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:'Select Genre',
             from:'',
             to:'',
             movies:[],
             present:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }
    
    onChangeFrom=(e)=>{
        this.setState({
            from: e.target.value
        })
    }
    onChangeTo=(e)=>{
        this.setState({
            to: e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.value)
        console.log(this.state.from)
        console.log(this.state.to)
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=de6b4672f86ff0807b144f81ff753824&with_genres='+this.state.value+'&primary_release_date.gte='+this.state.from+'&primary_release_date.lte='+this.state.to)
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
            from:'',
            to:'',
            present:false
        })

    }

    
    render() {
        if(!this.state.present){
        return (
            <div style={{marginLeft:"20px"}}>
                    <form onSubmit={this.handleSubmit}>
        <label>
          Pick Genre:
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
        </label>
        <br/>
        <label>From:</label>
        <input type="text" className="form-control col-md-3"placeholder="Enter initial date" value={this.state.from} onChange={this.onChangeFrom}/>
        <small>*Please enter date in YYYY-MM-DD format eg.2014-09-15</small>
        <br/>
        <br/>
        <label>To:</label>
        <input type="text" className="form-control col-md-3" placeholder="Enter final date" value={this.state.to} onChange={this.onChangeTo}/>
        <small>*Please enter date in YYYY-MM-DD format eg.2014-10-15</small>
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>

        </div>
        )
    }
    else{
        // const {movies}=this.state
        // return
        // (
        //     <h1>genre movies</h1>
        // )
        const {movies,value}=this.state
        return(
            <div style={{marginLeft:"20px"}}>

        <h1>Movies:</h1>

        <   input  class="btn btn-primary" type="reset" value="Reset Filter" onClick={this.onButtonClicked}></input>
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
            <h6>Adult:<p>{item.adult}</p></h6>
                </div>
               
                
            <hr style={{borderWidth:"10px",width:"95%"}}></hr>
</div>)}
<input  class="btn btn-primary" type="reset" value="Reset Filter" onClick={this.onButtonClicked}></input>
                <br/>
                <br/>
</div>
                
        )
    }
    }
}

export default filter_api

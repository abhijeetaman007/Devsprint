//Filtering Movies by year
import React, { Component } from 'react'
import axios from 'axios';

class filter extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
            movies:[],
            year:'',
            present:false
        }
        
    }

    onChangeYear=(e)=>{
        this.setState({
            year: e.target.value
            
        })
        console.log(this.state.year)
    }
    onSubmit=(e)=>{
        e.preventDefault();
        axios.get('http://localhost:7000/movies/year/'+this.state.year)
            .then(response =>{
                this.setState({movies: response.data})
                console.log("Data fetched")
            })
            .catch(function(error){
                console.log(error)
            })
            this.setState({
                present: true,
            })

            
    }
    onButtonClicked=(e)=>{
        e.preventDefault()
        this.setState({
            year:'',
            movies:[],
            present:false
        })

    }
    

    
    

    render() {
        if(!this.state.present){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group col-md-3"> 
                        <label>Year: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.year}
                                onChange={this.onChangeYear}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Show Movies" className="btn btn-primary" style={{marginLeft:"165px"}}/>
                    </div>
                </form>
            </div>
        )
        
    }
    else{
        if(this.state.movies.length>0)
        {
            const { movies,year }= this.state
        return (
            <div>
                <h1>    Movies of {year}</h1>
                {movies.map(item => 
                    <div className="key" >
                    <h3>Title: {item.title}</h3>
                    <h5>Rated:{item.rated}</h5>
                    <h5>Runtime:{item.runtime}</h5>
                    <h5>Genre:{item.genre}</h5>
                    <h5>Actors:{item.actors}</h5>
                    <h5>Director:{item.director}</h5>
                    <h5>Writer:{item.writer}</h5>
                    <h5>Production:{item.production}</h5>
                    <h5>Plot:{item.plot}</h5>
                    <h5>Language:{item.language}</h5>
                    <h5>Country:{item.country}</h5>
                    <h5>Awards:{item.awards}</h5>
                    <h5>Imdb ID:{item.ImdbID}</h5>
                <hr style={{borderWidth:"10px",width:"95%"}}></hr>
             </div>)}          
                        <input class="btn btn-primary" type="reset" value="Reset Filter"  onClick={this.onButtonClicked}></input>                    
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

export default filter

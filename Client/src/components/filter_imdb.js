//Filtering Movies by imdbid
import React, { Component } from 'react'
import axios from 'axios';

class filterimdb extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
            movies:[],
             ImdbID:'',
             present:false
        }
    }

    onChangeImdbID=(e)=>{
        this.setState({
            ImdbID: e.target.value
            
        })
        console.log(this.state.ImdbID)
    }
    onSubmit=(e)=>{
        e.preventDefault();
        axios.get('http://localhost:7000/movies/view/imdbid/'+this.state.ImdbID)
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
            ImdbID:'',
            movies:[],
            present:false
        })

    }
    
    

    render() {
        if(!this.state.present){
        return (
            <div>
                {/* <h3>Filter added movies</h3> */}
                <form onSubmit={this.onSubmit}>
                <div className="form-group col-md-3"> 
                        <label>ImdbID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ImdbID}
                                onChange={this.onChangeImdbID}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Show Movies" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
        
    }
    else{
        const { movies }= this.state
        return (
            <div>
                
                    <h1>Movie</h1>
                {movies.map(item => 
                    <div className="key" >
                    <h3>Title: {item.title}</h3>
                    <h5>Genre:{item.genre}</h5>
                    <h5>Rated:{item.rated}</h5>
                    <h5>Runtime:{item.runtime}</h5>
                    <h5>Year:{item.year}</h5>
                    <h5>Actors:{item.actors}</h5>
                    <h5>Director:{item.director}</h5>
                    <h5>Writer:{item.writer}</h5>
                    <h5>Production:{item.production}</h5>
                    <h5>Plot:{item.plot}</h5>
                    <h5>Language:{item.language}</h5>
                    <h5>Country:{item.country}</h5>
                    <h5>Awards:{item.awards}</h5>
                <hr></hr>
  </div>)}
            <input class="btn btn-primary" type="reset" value="Reset Filter" onClick={this.onButtonClicked}></input>
            </div>
        )
    }
    }
}

export default filterimdb

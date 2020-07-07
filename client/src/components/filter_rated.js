//Filtering Movies by rated
import React, { Component } from 'react'
import axios from 'axios';

class filterrated extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
            movies:[],
             rated:'',
             present:false
        }
    }

    onChangeRated=(e)=>{
        this.setState({
            rated: e.target.value
            
        })
        console.log(this.state.rated)
    }
    onSubmit=(e)=>{
        e.preventDefault();
        axios.get('http://localhost:7000/movies/rated/'+this.state.rated)
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
            rated:'',
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
                        <label>Rated: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rated}
                                onChange={this.onChangeRated}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Show Movies" className="btn btn-primary" style={{marginLeft:"100px"}}/>
                    </div>
                </form>
            </div>
        )
        
    }
    else{
        if(this.state.movies.length>0)
        {
            const { movies,rated }= this.state
            return (
            <div>
                
                <h1>{rated} rated movies</h1>
                {movies.map(item => 
                    <div className="key" >
                    <h3>Title: {item.title}</h3>
                    <h5>Genre:{item.genre}</h5>
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
                    <h5>Imdb ID:{item.ImdbID}</h5>
                <hr style={{borderWidth:"10px",width:"95%"}}></hr>
  </div>)}
                <input class="btn btn-primary" type="reset" value="Reset Filter" onClick={this.onButtonClicked}></input>
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

export default filterrated

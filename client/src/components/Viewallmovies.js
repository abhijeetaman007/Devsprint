import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Movie = props =>(             //Single Row in a table
    <tr>
        <td>{props.movie.title}</td>
        <td>{props.movie.year}</td>
        <td>{props.movie.rated}</td>
        <td>{props.movie.runtime}</td>
        <td>{props.movie.genre}</td>
        <td>{props.movie.director}</td>
        <td>{props.movie.writer}</td>
        <td>{props.movie.production}</td>
        <td>{props.movie.actors}</td>
        <td>{props.movie.plot}</td>
        <td>{props.movie.language}</td>
        <td>{props.movie.country}</td>
        <td>{props.movie.awards}</td>
        <td>{props.movie.ImdbID}</td>

    </tr>
)

export default class Viewallmovies extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            movies:[]          
        }
    }

    componentDidMount(){
        axios.get('http://localhost:7000/movies/view/all')
            .then(response =>{
                this.setState({movies: response.data})
            })
            .catch(function(error){
                console.log(error)
            })
    }
    
    movielist(){
        return this.state.movies.map(function(currmovie,i){
            return <Movie movie={currmovie} key={i} />
        })
    }
   
    render() {
        return (
            <div style={{margin:"20px"}}>
                <h3>All Added Movies</h3>
                <table className="table table-striped"  style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Rated</th>
                            <th>Runtime</th>
                            <th>Genre</th>
                            <th>Director</th>
                            <th>Writer</th>
                            <th>Production</th>
                            <th>Actors</th>
                            <th>Plot</th>
                            <th>Language</th>
                            <th>Country</th>
                            <th>Awards</th>
                            <th>ImdbID</th>
                        </tr>
                    </thead>
                    <tbody>
                         {this.movielist()} 

                    </tbody>
                </table>
            </div>
        )
    }
}


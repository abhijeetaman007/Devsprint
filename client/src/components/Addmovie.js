//Add new movie
import React, { Component } from 'react';
import axios from 'axios';

export default class Addmovie extends Component {

    constructor(props) {
        super(props);

        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMovieRated = this.onChangeMovieRated.bind(this);
        this.onChangeMovieRuntime = this.onChangeMovieRuntime.bind(this);
        this.onChangeMovieGenre = this.onChangeMovieGenre.bind(this);
        this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
        this.onChangeMovieWriter = this.onChangeMovieWriter.bind(this);
        this.onChangeMovieProduction = this.onChangeMovieProduction.bind(this);
        this.onChangeMovieActors = this.onChangeMovieActors.bind(this);
        this.onChangeMoviePlot = this.onChangeMoviePlot.bind(this);
        this.onChangeMovieLanguage = this.onChangeMovieLanguage.bind(this);
        this.onChangeMovieCountry = this.onChangeMovieCountry.bind(this);
        this.onChangeMovieAwards = this.onChangeMovieAwards.bind(this);
        this.onChangeMovieImdbID = this.onChangeMovieImdbID.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            year:'',
            rated:'',
            runtime:'',
            genre:'',
            director:'',
            writer:'',
            production:'',
            actors:'',
            plot:'',
            language:'',
            country:'',
            awards:'',
            ImdbID:'',
        }
    }

    onChangeMovieTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeMovieYear(e) {
        this.setState({
            year: e.target.value
        });
    }
    onChangeMovieRated(e) {
        this.setState({
            rated: e.target.value
        });
    }
    onChangeMovieRuntime(e) {
        this.setState({
            runtime: e.target.value
        });
    }
    onChangeMovieGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }
    onChangeMovieDirector(e) {
        this.setState({
            director: e.target.value
        });
    }
    onChangeMovieWriter(e) {
        this.setState({
            writer: e.target.value
        });
    }
    onChangeMovieProduction(e) {
        this.setState({
            production: e.target.value
        });
    }
    onChangeMovieActors(e) {
        this.setState({
            actors: e.target.value
        });
    }
    onChangeMoviePlot(e) {
        this.setState({
            plot: e.target.value
        });
    }
    onChangeMovieLanguage(e) {
        this.setState({
            language: e.target.value
        });
    }
    onChangeMovieCountry(e) {
        this.setState({
            country: e.target.value
        });
    }
    onChangeMovieAwards(e) {
        this.setState({
            awards: e.target.value
        });
    }
    onChangeMovieImdbID(e) {
        this.setState({
            ImdbID: e.target.value
        });
    }
    
    
    

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
           
          const newMovie={
            title: this.state.title ,
            year: this.state.year,
            rated: this.state.rated,
            runtime: this.state.runtime,
            genre: this.state.genre,
            director: this.state.director,
            writer: this.state.writer,
            production: this.state.production,
            actors: this.state.actors,
            plot: this.state.plot,
            language: this.state.language,
            country: this.state.country,
            awards: this.state.awards,
            ImdbID: this.state.ImdbID,
          };
        
        axios.post('http://localhost:7000/movies/add', newMovie)   //endpoint of backend
            .then(res => console.log(res.data));

        this.setState({
            
            title: '',
            year:'',
            rated:'',
            runtime:'',
            genre:'',
            director:'',
            writer:'',
            production:'',
            actors:'',
            plot:'',
            language:'',
            country:'',
            awards:'',
            ImdbID:'',

        })
    }

    render() {
        return (
            <div style={{margin: 30 ,fontSize:"15px"}}>
                <h3>Adding Movie</h3>
                <form class="form-row" onSubmit={this.onSubmit}>
                    <div className="form-group col-md-12"> 
                        <label>Movie Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeMovieTitle}
                                />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Year: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.year}
                                onChange={this.onChangeMovieYear}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Rated: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rated}
                                onChange={this.onChangeMovieRated}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Runtime </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.runtime}
                                onChange={this.onChangeMovieRuntime}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Genre: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.genre}
                                onChange={this.onChangeMovieGenre}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Director: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.director}
                                onChange={this.onChangeMovieDirector}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Writer: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.writer}
                                onChange={this.onChangeMovieWriter}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Production: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.production}
                                onChange={this.onChangeMovieProduction}
                                />
                    </div>
                    <div className="form-group col-md-3"> 
                        <label>Actors: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.actors}
                                onChange={this.onChangeMovieActors}
                                />
                    </div>
                    <div className="form-group col-md-12"> 
                        <label>Plot: </label>
                                <textarea class="form-control"  rows="3" value={this.state.plot} onChange={this.onChangeMoviePlot} ></textarea>
                    </div>
                    <div className="form-group form-group col-md-3"> 
                        <label>Language: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.language}
                                onChange={this.onChangeMovieLanguage}
                                />
                    </div>
                    <div className="form-group form-group col-md-3"> 
                        <label>Country: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.country}
                                onChange={this.onChangeMovieCountry}
                                />
                    </div>
                    <div className="form-group form-group col-md-3"> 
                        <label>Awards: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.awards}
                                onChange={this.onChangeMovieAwards}
                                />
                    </div>
                    <div className="form-group form-group col-md-3"> 
                        <label>Imdb ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ImdbID}
                                onChange={this.onChangeMovieImdbID}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
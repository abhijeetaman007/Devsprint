//Filter by initial and Final Date
import React, { Component } from 'react'
import axios from 'axios';

export class filter_api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             from:'',
             to:'',
             movies:[],
             present:false
        }
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
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=de6b4672f86ff0807b144f81ff753824&primary_release_date.gte='+this.state.from+'&primary_release_date.lte='+this.state.to)
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
                        <label ><h3>From Date:</h3></label>
                        <input type="text" className="form-control col-md-3"placeholder="Enter initial date" value={this.state.from} onChange={this.onChangeFrom}/>
                        <small>*Please enter date in YYYY-MM-DD format eg.2014-09-15</small>
                        <br/>
                        <br/>
                        <label><h3>To Date:</h3></label>
                        <input type="text" className="form-control col-md-3" placeholder="Enter final date" value={this.state.to} onChange={this.onChangeTo}/>
                        <small>*Please enter date in YYYY-MM-DD format eg.2014-10-15</small>
                        <br/>
                        <br/>
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

export default filter_api

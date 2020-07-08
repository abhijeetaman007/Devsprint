import React, { Component } from 'react'
import axios from 'axios'

export class delete_movies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todelete:'',
        }
    }
    onChangeDelete=(e)=>{
        this.setState({
            todelete: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(window.confirm('Are you sure?'))
        {
            axios.delete('http://localhost:7000/movies/delete/title/'+this.state.todelete)
            this.setState({
                todelete:'',
            })
            window.alert('Movie Deleted')
        }
        
        
    }
    
    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group col-md-3"> 
                        <label>Enter Title of Movie </label>
                        <input  type="text"
                                className="form-control"
                                placeholder="Enter title of the movie to be deleted"
                                value={this.state.todelete}
                                onChange={this.onChangeDelete}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Delete" className="btn btn-danger" style={{marginLeft:"165px"}}/>
                    </div>
                </form>        
            </div>
        )
    
    }
}

export default delete_movies

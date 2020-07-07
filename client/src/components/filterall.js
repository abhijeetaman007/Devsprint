import React, { Component } from 'react'
import Filteryear from "./filter"
import Filtergenre from "./filter_genre"
import Filterrated from "./filter_rated"
import Filterimdb  from "./filter_imdb" 

export class filterall extends Component {
    render() {
        return (
            <div style={{marginLeft:"20px"}} >
                <h4 style={{marginLeft:"20px"}} >Filter Added Movies</h4>
                <br></br>
                <br></br>
                <Filteryear /> 
                <Filtergenre/>
                <Filterrated/>
                <Filterimdb/>
            </div>
        )
    }
}

export default filterall

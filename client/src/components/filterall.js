import React, { Component } from 'react'
import Filteryear from "./filter"
import Filtergenre from "./filter_genre"
import Filterrated from "./filter_rated"
import Filterimdb  from "./filter_imdb" 

export class filterall extends Component {
    render() {
        return (
            <div style={{marginLeft:"100px"}} >
                <h3>Filter Added Movies</h3>
                <Filteryear/> 
                <Filtergenre/>
                <Filterrated/>
                <Filterimdb/>
            </div>
        )
    }
}

export default filterall

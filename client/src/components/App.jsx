import React from 'react'
import Header from "./Header";
import Movie from './Movie';
import Search from "./Search";
import movies from "../movies";
function createmovie(x){
    return <Movie name={x.name} title={x.title}/>
}
function App() {
    return (
        <div>
            <Header/>
            <Search/>
            {movies.map(createmovie)}
        </div>
    )
}
export default App;
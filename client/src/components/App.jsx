import React, {useState} from 'react'
import Profile from "./Profile";
import Header from "./Header";

//so the search item is stored in 'sub'

export default function App() {
    const [name,setName]=useState("");
    const [sub,setSub]=useState("");

    function handleChange(event){
        //console.log(event.target.value);
        setName(event.target.value)
    }
    function handleClick(){
        setSub(name)
        setName("")
    }
    
    return (
        <div>
        <Header/>
            <div className='search'>
            
            <p>
            <input type='text' placeholder='eg:harry+potter' onChange= {handleChange} value={name}></input> 
           <button onClick={handleClick}>Submit</button>
            </p>
            <p>Movie Query just to check:{sub}</p>
            
           
        </div>
            <Profile/>
            </div>
    )
}

//for db part needed

// import React from 'react'
// import Header from "./Header";
// import Movie from './useless/Movie';
// import Search from "./useless/Search";
// import movies from "./useless/movies";
// function createmovie(x){
//     return <Movie name={x.name} title={x.title}/>
// }
// function App() {
//     return (
//         <div>
//             <Header/>
//             <Search/>
//             {movies.map(createmovie)}
//         </div>
//     )
// }
// export default App;
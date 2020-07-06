import React from 'react'

export default function UpcomingList(props) {
    return (
        <div style={{margin:"10px"}}>
            <button class="btn btn-outline-primary" style={{marginLeft:"20px",padding:"10px"}} onClick={props.handleUpcoming }>Upcoming Movies</button>
        </div>
    )
}

//API---> https://api.themoviedb.org/3/movie/upcoming?api_key=de6b4672f86ff0807b144f81ff753824&language=en-US&page=1
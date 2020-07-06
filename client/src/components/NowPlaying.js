import React from 'react'

export default function NowPlaying(props) {
    return (
        <div style={{margin:"10px"}}>
            <button class="btn btn-outline-primary" style={{marginLeft:"20px",paddingRight:"28px",paddingLeft:"28px"}} onClick={props.handleNowplaying }>Now Playing</button>
        </div>
    )
}
//  https://api.themoviedb.org/3/genre/movie/list?api_key=de6b4672f86ff0807b144f81ff753824&language=en-US
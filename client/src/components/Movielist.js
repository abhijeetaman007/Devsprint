import React from 'react';
import Movie from './Movie';

export default function Movielist(props) {
    return (
        <div className="container">
            <div className='row'>
                
                    {
                        props.movies.map((movie,i)=>{
                            return <Movie key={i} movieInfo={props.movieInfo} movieid={movie.id} image={movie.poster_path}/>
                        })
                    }
                
            </div>
        </div>
            
        
    )
}
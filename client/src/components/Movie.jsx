import React from 'react'

function Movie(props) {
    return (
        <div className='movie'>
        
        <h1>{props.name}</h1>
        
            <p>
                {props.title}
            </p>
      
        </div>
    )
}
export default Movie;
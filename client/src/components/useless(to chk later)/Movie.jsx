// eslint-disable-next-line
import React, {useState} from 'react'

function Movie(props) {

    const [countlikes,setCountlikes]=useState(0);
    const [countdislikes,setCountdislikes]=useState(0);

    function like(){
        setCountlikes(countlikes+1)
    }
    function dislike(){
        setCountdislikes(countdislikes+1)
    }
    

    return (
        <div className='movie'>
        
        <h1>{props.name}</h1>
        
            <p>
                {props.title}
            </p>
            <div className='rate'>
                <button onClick={like}>👍</button>
                Likes:{countlikes}
            </div>
            <div className='rate'>
                <button onClick={dislike}>👎</button>
                Dislikes:{countdislikes}
            </div>
            <div className='rate'>
                Total reviews:{countlikes+countdislikes}
            </div>
                
           
        
        
        </div>
    )
}
export default Movie;
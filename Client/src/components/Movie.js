import React from 'react'

export default function Movie(props) {
    return (
        <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='card'>
            <div class="card-img-top">
            {
                props.image==null?<img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} style={{ width: "100%",
                        height: 360}}></img>:<img src={`http://image.tmdb.org/t/p/w185${props.image}`} style={{ width: "100%",
                        height: 360}}></img>
            }
            </div>
            <div class="card-body">                    
                    <p className="card-text"><a href="#" onClick={() => props.movieInfo(props.movieid)}>View Details</a></p>
                </div>  
        </div>
        </div>
    )
}
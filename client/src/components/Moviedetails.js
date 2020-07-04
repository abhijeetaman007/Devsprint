import React from 'react';

const Moviedetails = (props) => {      
    return (
        <div>
            <div className="container">
                <div className="row" onClick={props.goBack} style={{cursor: "pointer", paddingTop: 50}}>
                    <span style={{marginLeft: 10}}>Go back</span>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        { props.currmovie.poster_path == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} style={{ width: "100%",
                            height: 360}} /> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.currmovie.poster_path}`} style={{ width: "100%",
                            height: 360}} />}
                    </div>
                    <div className="col s12 m8">
                        <div className="info-container">
                            <p><b>Title:</b>  {props.currmovie.title}</p>
                            <p><b>Release Date:</b>  {props.currmovie.release_date}</p>
                            <p><b>Overview:</b>  {props.currmovie.overview}</p>
                            <p><b>Popularity:</b>  {props.currmovie.popularity}</p>
                            <p><b>vote_average:</b>  {props.currmovie.vote_average}/10</p>
                            <p><b>Rated for adults:</b>  {props.currmovie.adult?"YES":"NO"}</p>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Moviedetails;
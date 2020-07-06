import React from 'react'

export default function Toprated(props) {
    return (
        <div style={{margin:"10px"}}>
            <button class="btn btn-outline-primary" style={{paddingRight:"36px",marginLeft:"20px",paddingLeft:"36px"}} onClick={props.handleToprated }>Top Rated</button>
        </div>
    )
}

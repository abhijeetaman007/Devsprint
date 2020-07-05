import React from 'react'

export default function Toprated(props) {
    return (
        <div>
            <button class="btn btn-outline-primary" style={{margin:"20px"}} onClick={props.handleToprated }>Top Rated</button>
        </div>
    )
}

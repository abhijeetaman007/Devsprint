import React from 'react'

export default function Search(props) {
    return (
        <div className="search">
        <p>
        <form action="" onSubmit={props.handleSubmit}>
        <input
            type="text"
            placeholder="Search movie"
            onChange={props.handleChange}
          ></input>
        </form>
        </p>
      </div>
    )
}

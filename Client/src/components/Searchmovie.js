import React from 'react'

export default function Searchmovie(props) {
    return (
      <div  style={{marginLeft:"30rem",marginBottom:"1rem"}}>
          
          <div className="form-inline">
            
            <form onSubmit={props.handleSubmit} action="">
                <div class="input-field">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleChange} />  
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>                          
                </div>  
            </form>
                       
    
</div>
        
      </div>
           
    )
}

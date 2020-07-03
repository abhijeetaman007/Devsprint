import React, {useState} from 'react'

export default function Search() {
    const [name,setName]=useState("");
    const [sub,setSub]=useState("");

    function handleChange(event){
        //console.log(event.target.value);
        setName(event.target.value)
    }
    function handleClick(){
        setSub(name)
    }
    
    return (
        <div className='search'>
            
            <p>
            <input type='text' placeholder='Please enter genre name' onChange= {handleChange} value={name}></input> 
           <button onClick={handleClick}>Submit</button>
            </p>
            <p>Genre:{sub}</p>
            
           
        </div>
    )
}

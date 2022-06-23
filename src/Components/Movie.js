import React,{useState} from 'react'
import '../App.css'

const Movie = (props) =>{
    
    const [show, setShow] =  useState(false)
    return(

       
    <div onClick={()=>setShow(!show)} className="MovieContainer">
        <img alt ="movie poster"src={"https://image.tmdb.org/t/p/original/"+props.poster}></img>
       
        {show && (
        <ul>
        <li>{props.title}</li> 
        <li>{props.overview}</li>
        <li>{props.release}</li>
        <li>{props.popularity}</li>
        </ul>
        )}
    
    </div>
   
    ) 
}

export default Movie 
import React,{useState} from 'react'


const Movie = (props) =>{
    
    const [show, setShow] =  useState(false)
    return(

       
    <div onClick={()=>setShow(!show)}>
        <img src={"https://image.tmdb.org/t/p/original/"+props.poster}></img>
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
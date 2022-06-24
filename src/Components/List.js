import React,{useEffect,useState} from 'react'
import Movie from './Movie.js'
import axios from 'axios'

const List = (props) => {
    
    const Api = props.Api;
    const Rating  = props.Rating;
    const RatingS = Rating*2;
    const RatingI = RatingS-2;
    
    const[list, setList] = useState([])
    useEffect(()=>{
        getData();
    
    },[Api,Rating])
        const getData = async () =>{
        const res = await axios.get(Api)
        setList(res.data.results)
        }




    return (
        <div className="ListContainer">
            {list.filter((movie) =>{
                if(Rating!==null)
                    {
                        if(Rating===0)
                        {
                            return(movie)}
                        else{ 
                            if(movie.vote_average<=RatingS  && movie.vote_average>=RatingI){
                            console.log("rating con numeros")
                            return (movie)}
                        }    
                    }
                else{
                    return(movie)}
            }).map((movie)=>
                <Movie key={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                overview={movie.overview}
                realese={movie.release_date}
                popularity={movie.popularity}
                />
                )}
        </div>
    )
}

export default List;
import React,{useEffect,useState} from 'react'
import Movie from './Movie.js'
import axios from 'axios'
const List = (props) => {

    const[list, setList] = useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData = async () =>{
      const res = await axios.get(props.Api)
      console.log(res)
      setList(res.data.results) 
    }



    return (
        <div className="ListContainer">
            {list.map((movie)=>
            <Movie 
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
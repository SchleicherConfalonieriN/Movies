import React,{useEffect,useState} from 'react'
import Movie from './Movie.js'
import axios from 'axios'

const List = (props) => {
    
    let Api = props.Api;

    const[list, setList] = useState([])
    useEffect(()=>{
        getData();
    
    },[Api])
    const getData = async () =>{
      const res = await axios.get(Api)
      setList(res.data.results)

    }
    return (
        <div className="ListContainer">
            {list.map((movie)=>
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
import React,{useState,useEffect} from 'react'
import DiscoverList from './DiscoverList'
import SearchList from './SearchList'

const Home = () =>{
    
    const[search, setSearch] = useState("")

    const HandleChange = async (e) => {
        setSearch(e.target.value)
    }

    const Conditional = () =>{
        if(search===""){
        return(<DiscoverList/>)}
        else{
        return(<SearchList Query={search}/>)}
    }
    
    return(
    <div>      
        <input className="SearchTab" placeholder="Search a movie" value = {search}   onChange={(e) => HandleChange(e)}/>
        {Conditional()}
    </div>
    )
}

export default Home;
import React,{useState} from 'react';
import List from '../Components/List.js'
import Api from '../Api/Api.js'
import {AiFillStar} from 'react-icons/ai'


const SearchList = (props) =>{

    const [rating, setRating] = useState("")



    const Url= Api.search.searchS + props.Query + Api.search.searchE
        return ( 
            <div>
                {[...Array(5)].map((star) => {
                    return(
                    <label>
                        <input type= "radio" name="rating"></input>    
                        <AiFillStar  size={50}/>
                    </label>
                    );})}

            <List Api={Url}/>
            </div>)
        }
export default SearchList
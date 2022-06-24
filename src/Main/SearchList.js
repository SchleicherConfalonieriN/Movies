import React,{useState} from 'react';
import List from '../Components/List.js'
import Api from '../Api/Api.js'
import {AiFillStar} from 'react-icons/ai'


const SearchList = (props) =>{

    const [rating, setRating] = useState(0)



    const Url= Api.search.searchS + props.Query + Api.search.searchE
        return ( 
            <div>
                {[...Array(5)].map((star, counter) => {
                    const ratingValue = counter + 1;
                    return(
                    <label>
                        <input type= "radio" name="rating" value = {ratingValue}  onClick={(e) => setRating(e.target.value)}></input>    
                        <AiFillStar  size={50}/>
                    </label>
                    );})}

            <List Api={Url} Rating={rating}/>
            </div>)
        }
export default SearchList
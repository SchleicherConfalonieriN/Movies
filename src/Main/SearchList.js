import React from 'react';
import List from '../Components/List.js'
import Api from '../Api/Api.js'


const SearchList = (props) =>{
    const Url= Api.search.searchS + props.Query + Api.search.searchE
        return ( 
            <div>
            <List Api={Url}/>
            </div>)
        }
export default SearchList
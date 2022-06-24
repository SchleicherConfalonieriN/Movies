import React from 'react'
import Api from '../Api/Api.js'
import List from '../Components/List.js'

const DiscoverList = () =>{
    return(
    <div>
        <List Api = {Api.discoverP} Rating={null}/>
    </div>
    )
}

export default DiscoverList;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic} from "@fortawesome/free-solid-svg-icons"

export default function Nav({librarystatus,setlibrarystatus}){
    return(
        <div className="nav">
            <h1>Waves</h1>
            <button onClick={()=>setlibrarystatus(!librarystatus)}>
                library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </div>
    )
}
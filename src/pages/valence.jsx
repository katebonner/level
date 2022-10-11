import React from 'react';
import User from './components/user';
import Top from './components/top';
import { Link } from "react-router-dom";

const Valence = () => {

    
    return(
        <>
            <User></User>
            <button className='connect'><Link to='/score'>calculate my score</Link></button>
            <Top></Top>
        </>
    )
}

export default Valence;
import React, {useEffect, useState} from 'react';
import User from './components/user';
import Top from './components/top';
import ValenceScore from './components/valenceScore';

const Valence = () => {

    const [top, setTop] = useState([]);

    useEffect(() => {
        let topIds = window.localStorage.getItem('top');
        setTop(topIds)
    }, [])
    
    return(
        <>
            <User></User>
            {/* { top === 0 ? <button> button </button> : <ValenceScore></ValenceScore> } */}
            {/* <ValenceScore></ValenceScore> */}
            <Top></Top>
        </>
    )
}

export default Valence;
import React from "react";
import { Link } from "react-router-dom";


const Intro = () => {
    return (
        <>
        <h2 className='large-font margin-large floating'>Spotify's API contains a happiness measurement.</h2>
            <img className='wave-large floating3' src={require('../assets/wave.png')} alt='sin wave'/>
            <div className='intro-container'>
                <div className='intro-elements'>
                    <h5 className='intro-text floating3'>This measurement, called valence, is assigned to every track in spotify's collection and lives on a scale from 0.0 to 1.0.</h5>
                    <h5 className='intro-text floating2'>"Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."</h5>
               </div>
               <div className='center floating'>
               <Link to='/valence'><button className='profile-btn'> click me</button></Link>
               </div>
            </div>
        </>
    )

}

export default Intro;
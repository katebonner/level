import React from 'react';
import SpotifyAuth from '../spotify/auth';

const Landing = () => {
    const spotifyAuth = SpotifyAuth();
    return(
        <>
            <h1 className='logo floating'>level</h1>
            <img className='wave floating2' src={require('../assets/wave.png')} alt='sin wave'/>
            <div className='center'>
            <button className='connect' ><a href={`${spotifyAuth.AUTH_ENDPOINT}?client_id=${spotifyAuth.CLIENT_ID}&redirect_uri=${spotifyAuth.REDIRECT_URI}&response_type=${spotifyAuth.RESPONSE_TYPE}&scope=${spotifyAuth.SCOPE}`}>connect to spotify</a></button>
            </div>
        </>
    )
}

export default Landing;










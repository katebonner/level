import React from 'react';
import SpotifyAuth from '../spotify/auth';

const Landing = () => {
    const spotifyAuth = SpotifyAuth();

    const exitModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }


    return(
        <>  
            <div id="myModal" className="modal">
                 <div className="modal-content">
                    <span onClick={exitModal} className="close">&times;</span>
                    <p className='modal-text'>Due to restrictions with the Spotify API, only a limmited list of specified users can access this applicaiton. To request access, please email me at <a className='modal-link' href='mailto:katebonner277@gmail.com'>katebonner277@gmail.com</a></p>
                    </div>
            </div>


            <h1 className='logo floating'>level</h1>
            <img className='wave floating2' src={require('../assets/wave.png')} alt='sin wave'/>
            <div className='center'>
            <button className='connect' ><a href={`${spotifyAuth.AUTH_ENDPOINT}?client_id=${spotifyAuth.CLIENT_ID}&redirect_uri=${spotifyAuth.REDIRECT_URI}&response_type=${spotifyAuth.RESPONSE_TYPE}&scope=${spotifyAuth.SCOPE}`}>connect to spotify</a></button>
            </div>
        </>
    )
}

export default Landing;










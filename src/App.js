import './App.css';
import SpotifyAuth from './spotify/auth';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import {Chart , ArcElement} from 'chart.js';

Chart.register(ArcElement);


function App() {
  const spotifyAuth = SpotifyAuth();
  const [token, setToken] = useState('');
  const [top, setTop] = useState([]);
  const [me, setMe] = useState('');
  const [valence, setValence] = useState([]);

  useEffect(()=>{
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    //IF NO TOKEN GET TOKEN AND SAVE TO LOCAL STORAGE
    if(!token && hash){
        token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
        window.location.hash = '';
        window.localStorage.setItem('token', token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  }

  const queryMe = async () => {
    const {data} = await Axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(data)
    setMe(data);
  }

  const renderMe = () => {
    return (
      <div key={me.id} className='me-container'>
        <div>
        <h1 class='floating'>{me.display_name}</h1>
        <img className='wave floating2' src={require('./assets/wave.png')} alt='sin wave'/>
        </div>
        <img className='border-radius margin-medium floating3' src={me.images[0].url} alt='profile'/> 
      </div>
    );
  };

  const queryTop = async (e) => {
    e.preventDefault();
    const {data} = await Axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 50,
        offset: 0,
      }
    });
    console.log(data);
    setTop(data.items);
  }

  const renderTop = () => {
    return (
      top.map(item => (
      <div key={item.id} className='song-container col-5'>
        <img src={item.album.images[0].url} height='50px' width='50px' className='border-radius' alt='album'/> 
        {item.name}
      </div>
    )));
  };

  const queryTrackValence = async () => {
    let topTrackId = top.map((track) => {
      return track.id;
    });
    const commaSeperatedTopIdList = topTrackId.join(',');
    const {data} = await Axios.get('https://api.spotify.com/v1/audio-features', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        ids: commaSeperatedTopIdList
      }
    });

    let valenceValues = await data.audio_features.map((track) => {
      return track.valence
    })
    console.log(valenceValues);
    setValence(await valenceValues);
  };

  const renderValenceScore = () => {
    const valenceArray = valence;
    var sum = 0;
    for (let i=0; i<valenceArray.length;i++){
      sum += valence[i];
    }
    var avg = sum/valenceArray.length;
    var percent = Math.trunc(avg*100);
    const usAvgPercent = 46;
    var difference = Math.abs(usAvgPercent - percent);
    const data = {
      labels: [
        'score',
        'transparent'
      ],
      datasets: [{
        label: 'valence',
        data: [percent, 100 - percent],
        backgroundColor: [
          '#dd2302',
          'rgb(255, 255, 255, 0)',
        ],
        hoverOffset: 4
      }]
    };
    return (
      <>
      <div className='shrink floating2'>
        {percent < usAvgPercent ?
        <h3>your valence level is {difference}% lower than the national average</h3>
        : <h3> </h3> }
        {percent === usAvgPercent ?
        <h3>your valence level is equal to the national average</h3>
        : <h3> </h3> }
        {percent > usAvgPercent ?
        <h3>your valence level is {difference}% higher than the national average</h3>
        : <h3> </h3> }
      </div>
      <div className='padding-large floating'> 
        <Doughnut data={data} ></Doughnut>
        <div className='center'>{percent}%</div>
      </div>
      </>
    );
  };


  return (
    <div className="App">
      <header className="App-header">
        {!token ?
        <>
        <h1 className='logo floating'>level</h1>
        <img className='wave floating2' src={require('./assets/wave.png')} alt='sin wave'/>
        <div className='center'>
          <button className='connect' ><a href={`${spotifyAuth.AUTH_ENDPOINT}?client_id=${spotifyAuth.CLIENT_ID}&redirect_uri=${spotifyAuth.REDIRECT_URI}&response_type=${spotifyAuth.RESPONSE_TYPE}&scope=${spotifyAuth.SCOPE}`}>connect to spotify</a></button>
        </div>
        </>
        : <div className='justify-right margin-medium'>
            <button className='connect' onClick={logout}>disconnect</button>
          </div> }

        {token ?
          <>
              {!me ? 
              <>
              <h2 className='large-font margin-large floating'>Spotify's API contains a happiness measurement.</h2>
              <img className='wave-large floating3' src={require('./assets/wave.png')} alt='sin wave'/>
              <div className='intro-container'>
              <div className='intro-elements'>
              <h5 className='intro-text'>This measurement, called valence, is assigned to every track in spotify's collection and lives on a scale from 0.0 to 1.0.</h5>
              <h5 className='intro-text'>
              "Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."
              </h5>
              </div>
              <div className='center'>
              <button className='profile-btn' onClick={queryMe}>my valence levels</button>
              </div>
              </div>
              </>
              :  
              <>
              {renderMe()}
                  {top.length === 0 ? 
                  <>
                  <button className='connect' onClick={queryTop}>query top</button>
                  </>
                  :  
                  <>
                  {/* <div className='song-list'>
                    {renderTop()}
                  </div> */}
                  {valence.length === 0 ?
                  <>
                  <button className='connect' onClick={queryTrackValence}>query happiness</button>
                  </> :
                  <>
                  <div className='score-container'>
                  {renderValenceScore()}
                  </div>
                  </>
                  }
                  </>}
              </>
              }
          </>
          : <></>}

      </header>
    </div>
  );
}

export default App;

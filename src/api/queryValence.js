import Axios from 'axios';

let token = window.localStorage.getItem('token');
let trackIds = window.localStorage.getItem('top');

const queryValence = async () => {
    const { data } = await Axios.get('https://api.spotify.com/v1/audio-features', {
      headers: {Authorization: `Bearer ${token}`},
      params: {ids: trackIds}
    });
    let valenceArray = [];
    data?.audio_features.map((track) => {
      valenceArray.push(track.valence);
    })
    var sum = 0;
    for (let i = 0 ; i < valenceArray.length; i++){
      sum += valenceArray[i];
    }
    var avg = sum/(valenceArray.length);
    var percent = Math.trunc(avg*100);
    return percent;
}

Axios.interceptors.request.use(async req => {
  if(!token){
    token = window.localStorage.getItem('token');
    req.headers.Authorization = `Bearer ${token}`;
  }
  if(!trackIds){
    trackIds = window.localStorage.getItem('top');
    req.params.ids = trackIds;
  }
  return req
})

export default queryValence;
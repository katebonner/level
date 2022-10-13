import Axios from 'axios';

let token = window.localStorage.getItem('token');
let trackIds = window.localStorage.getItem('top');
console.log(trackIds);
console.log(typeof trackIds);


const queryValence = async () => {
    const { data } = await Axios.get('https://api.spotify.com/v1/audio-features', {
      headers: {Authorization: `Bearer ${token}`},
      params: {ids: trackIds}
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  
    let valenceArray = data?.audio_features.map((track) => track.valence)
    var initialValue = 0;
    var sum = valenceArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
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
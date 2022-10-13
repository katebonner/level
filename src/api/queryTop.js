import Axios from 'axios';

let token = window.localStorage.getItem('token');


const queryTop = async () => {
  const { data } = await Axios.get('https://api.spotify.com/v1/me/top/tracks', {
    headers: {Authorization: `Bearer ${token}`},
    params: {limit: 50, offset: 0}
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

    let topTrackIds = data?.items.map((track) => {
        return track.id
    })
    let topTrackIdString = topTrackIds?.join(',');
    window.localStorage.setItem('top', topTrackIdString);

  return data;
}

Axios.interceptors.request.use(async req => {
  if(!token){
    token = window.localStorage.getItem('token');
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req
})

export default queryTop;
import Axios from 'axios';

let token = window.localStorage.getItem('token');
let trackIds = window.localStorage.getItem('top');


const queryValence = async () => {
  const { data } = await Axios.get('https://api.spotify.com/v1/audio-features', {
    headers: {Authorization: `Bearer ${token}`},
    params: {ids: trackIds}
  });
  return data;
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
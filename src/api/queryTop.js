import Axios from 'axios';

let token = window.localStorage.getItem('token');

const queryTop = async () => {
  const { data } = await Axios.get('https://api.spotify.com/v1/me/top/tracks', {
    headers: {Authorization: `Bearer ${token}`},
    params: {limit: 50, offset: 0}
  });
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
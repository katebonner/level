import Axios from 'axios';

let token = window.localStorage.getItem('token');

const queryMe = async () => {
  const { data } = await Axios.get('https://api.spotify.com/v1/me', {
    headers: {Authorization: `Bearer ${token}`}
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

export default queryMe;

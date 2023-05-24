import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // alert('No token found!');
    const newToken = 'new_token'
    config.headers.Authorization = `Bearer ${newToken}`; // Replace this with your default token
    localStorage.setItem('token',newToken)
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default api;
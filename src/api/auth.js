import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://expedit-database-production.up.railway.app/api',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  setToken(data.token);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  setToken(data.token);
  console.log(data);
  return data;
};

export const getCurrentUser = async token => {
  setToken(token);
  const { data } = await instance.get('/users/current');

  return data;
};

export default instance;

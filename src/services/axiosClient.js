import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getRequest = (path) => {
  return axios.get(`${BASE_URL}/${path}`);
};

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-app-9776c.firebaseio.com/'
});

export default instance;

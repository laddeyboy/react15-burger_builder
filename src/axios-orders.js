import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-builder-f4375.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cd423.firebaseio.com/'
});

export default instance;
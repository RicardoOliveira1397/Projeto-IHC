import axios from 'axios';

const api = axios.create({

    baseURL: 'https://modelo01.netlify.app:3071/'    
});

export default api;
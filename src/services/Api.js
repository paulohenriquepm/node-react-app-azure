import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your_app_name.azurewebsites.net/api'
});

export default api;
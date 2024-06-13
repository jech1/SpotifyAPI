import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Have to adjust the base URL to match our Django backend
});

export default api;
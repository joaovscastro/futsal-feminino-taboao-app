import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.futsalfemininotaboao.com.br/wp-json',
});

export default api;

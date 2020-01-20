import axios from "axios";

const api = axios.create({
  baseURL: 'https://futsalfemininotaboao.com.br/wp-json'
});

export default api;
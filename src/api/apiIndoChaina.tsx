import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
 export const API_BANK = axios.create({
    baseURL: import.meta.env.VITE_URL_SERVER_INDOCHAIN_BANK,
  });

export default axios;


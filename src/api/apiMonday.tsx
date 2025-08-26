import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9000/api';
export const axiosAPI = axios.create({
    baseURL: import.meta.env.VITE_URL_SERVER_DATABASE_MONDAY,
  });
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
export const EmailRegExp=`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`;
export const PhoneRegExp=  `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`;
export const PasswordRegExp=`/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/`
export default axios
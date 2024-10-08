import axios from "axios"

const serverUrl = process.env.REACT_APP_SERVER_URL;
const API = axios.create({baseURL: serverUrl});

export const logIn = (data) => API.post('/api/auth/login', data); 

export const signUp = (data) => API.post('/api/auth/signUp', data); 
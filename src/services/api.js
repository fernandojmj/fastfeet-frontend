import axios from "axios";


const api = axios.create({
  baseURL:"https://fastfeetbackend-fj.herokuapp.com/",
  // baseURL: "http://127.0.0.1:3001"
});

export default api;

// import axios from "axios";

const api = axios.create({
  baseURL: "https://netflix-repo.onrender.com",
  withCredentials: true,
  timeout: 60000 // 60 second timeout for slow backend wake-up
});

export default api;

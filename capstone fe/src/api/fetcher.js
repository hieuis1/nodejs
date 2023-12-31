import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:8080",
});

fetcher.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("USER"));

  if (user) {
    config.headers.Authorization = user.token;
  }
  return config;
});

export default fetcher;

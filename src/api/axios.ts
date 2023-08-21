import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1"
});

const accessToken = localStorage.getItem("accessToken");

instance.interceptors.request.use(
  config => {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
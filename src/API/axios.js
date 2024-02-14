import axios from "axios";

const axiosInstance = axios.create({
  // baseURL:"http://127.0.0.1:5001/clone-9a529/us-central1/api"
  baseURL: "https://api-th42nd76da-uc.a.run.app",
   
});

export {axiosInstance}
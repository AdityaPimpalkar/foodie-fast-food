import axios from "axios";
//import logger from "./logService";
import { toast } from "react-toastify";

toast.configure();

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    console.log(error.status)
  if (!expectedError) {
    if(error.message === 'Network Error') toast.error('Please check your network.');
    else toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
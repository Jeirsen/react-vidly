import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  ) {
    return Promise.reject(error);
  }

  console.log("Logging the error", error);
  toast.error("An unexpected error occurred.");
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

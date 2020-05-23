import axios from "axios";

const serverUrl = "http://localhost";

axios.interceptors.response.use(null, (error) => {
  console.log("Error", error);
  alert("Unexpected error");
  Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  serverUrl: serverUrl,
};

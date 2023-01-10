export default function setupAxios(axios) {
  //Axios Request
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "user_token"
      )}`;

      return config;
    },
    (err) => Promise.reject(err)
  );
}

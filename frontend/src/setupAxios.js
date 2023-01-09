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

  //Axios Response
  //   axios.interceptors.response.use(
  //     (response) => {
  //       return {
  //         ...response.data,
  //         apiStatus: response.status,
  //       };
  //     },
  //     function (error) {
  //       return Promise.reject(error);
  //     }
  //   );
}

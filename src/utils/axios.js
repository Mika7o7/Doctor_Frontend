import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://server.evas.am/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// const requestHandler = (request) => {
//   const auth = JSON.parse(localStorage.getItem("persist:auth"));
//   const token = JSON.parse(auth.token);
//   console.log(localStorage.getItem("persist:auth"));
//   request.headers.Authorization = `Bearer ${token}`;

//   return request;
// };

// const responseHandler = (response) => {
//   if (response.status_code === 401) {
//     window.location = "/sign-in";
//   }

//   return response;
// };

// api.interceptors.request.use((request) => requestHandler(request));

// api.interceptors.response.use((response) => responseHandler(response));

import axios from "axios";

// export const DoctorsApi = (id) => {
//   if (id) {
//     const response = axios
//       .get(`http://127.0.0.1:8000/doctors/${id}`)
//       .then((res) => res.json);
//     return response;
//   } else {
//     const response = axios
//       .get("http://127.0.0.1:8000/doctors/")
//       .then((res) => res.json);
//     return response;
//   }
// };

export const DoctorsApi = ({ queryKey }) => {
  const [_, userId] = queryKey;
  const response = axios
    .get(`http://127.0.0.1:8000/doctors/${userId ?? ""}`)
    .then((res) => res.data);
  return response;
};

export const Categories = async () => {
  const response = await axios.get("http://127.0.0.1:8000/professions/");
  return response.data;
};

// export const DoctorsApi = async (id) => {
//   if (id) {
//     const { isLoading, error, data } = useQuery(
//       "DoctorData",
//       async () =>
//         await axios
//           .get(`http://127.0.0.1:8000/doctors/${id}`)
//           .then((res) => res.json())
//     );
//   } else {
//     const { isLoading, error, data } = useQuery(
//       "DoctorsData",
//       async () =>
//         await axios
//           .get("http://127.0.0.1:8000/doctors/")
//           .then((res) => res.json())
//     );
//   }
// };

// export const Categories = async () => {
//   const { isLoading, error, data } = useQuery(
//     "DoctorsData",
//     async () =>
//       await axios
//         .get("http://127.0.0.1:8000/professions/")
//         .then((res) => res.json())
//   );
// };

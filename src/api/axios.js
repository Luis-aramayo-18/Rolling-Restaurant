import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

// TODO: Revisar por qué sigue trayendo el token anterior
const myAxios = () => {
  const token = sessionStorage.getItem('token');

  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default myAxios;
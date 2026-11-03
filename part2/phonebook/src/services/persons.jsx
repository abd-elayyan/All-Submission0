import axios from "axios";
const baseURL = "http://localhost:3001/persons";
// const getAll=()=>{}

const create = (newObject) => {
  return axios.post(baseURL, newObject).then((response) => response.data);
};

export default { create };

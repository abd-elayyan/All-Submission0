import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const create = (newObject) => {
  console.log("new person has been added successfully");
  return axios.post(baseURL, newObject).then((response) => response.data);
};

const deletePerson = (id) => {
  console.log("the delete id is : ", id);
  return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};

const getAll = () => {
  return axios.get(baseURL).then((response) => response.data);
};
export default { getAll, create, deletePerson };

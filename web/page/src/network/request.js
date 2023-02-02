import axios from "axios";

const request=axios.create({
  // baseURL:"https://8.141.165.101:8087",
  baseURL:"http://localhost:8087",
  timeout:100000
})
export default request;

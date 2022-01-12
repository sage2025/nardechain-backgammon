import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin' : 'http://localhost:3000',
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE"
  }
});
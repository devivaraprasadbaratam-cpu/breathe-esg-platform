import axios from "axios";

const API = axios.create({

  baseURL: "https://breathe-esg-platform-qrq9.onrender.com/api/",

});

export default API;
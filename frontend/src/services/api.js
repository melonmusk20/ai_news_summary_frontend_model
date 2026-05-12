import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-news-summary-backend-model.onrender.com",
});

export default API;

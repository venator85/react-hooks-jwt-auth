import axios from "axios";

const API_URL = "http://localhost:8080/api/pub/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const PublicService = {
  getPublicContent,
};

export default PublicService;

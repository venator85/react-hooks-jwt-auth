import axios from "axios";
import { BASE_API_URL } from "../baseApiUrl";

const API_URL = BASE_API_URL + "/pub/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const PublicService = {
  getPublicContent,
};

export default PublicService;

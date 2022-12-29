import axios from "axios";
import authHeader from "./auth-header";
import { BASE_API_URL } from "../baseApiUrl";

const API_URL = BASE_API_URL + "/test/";

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const UserService = {
  getUserBoard,
};

export default UserService;

import axios from "../lib/axios";

export const login = ({ email, password }) => {
  return axios.post("/login", { email, password });
};

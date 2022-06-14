import axios from "../lib/axios";

export const refreshToken = () => {
  return axios.post("/refresh").then((resp) => {
    return resp.data.access_token;
  });
};

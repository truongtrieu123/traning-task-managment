import axios from "axios";
import { TOKEN_KEY } from "constants/index";
import { getSessionStorage } from "./storage";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const isAuthToken = () => {
  return !!getSessionStorage(TOKEN_KEY);
};

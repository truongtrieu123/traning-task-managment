import axios from "axios";
import { TOKEN_KEY } from "constants/index";
import { getLocalStorage } from "./storage";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const isAuthToken = () => {
  console.log(getLocalStorage(TOKEN_KEY));
  console.log(!!getLocalStorage(TOKEN_KEY));
  return !!getLocalStorage(TOKEN_KEY);
};

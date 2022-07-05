import { AuthActionsType } from "./../../types/auth.type";
import axios from "axios";
import { TOKEN_KEY } from "constants/index";
import { apiUrl } from "constants/index";
import { isAuthToken, setAuthToken } from "utils/auth";
import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "utils/storage";

export const startAuthLoading = () => (dispatch: any, getState: any) => {
  dispatch({
    type: AuthActionsType.START_AUTH_LOADING,
    payload: {},
  });
};

export const loadUser = () => async (dispatch: any, getState: any) => {
  if (isAuthToken()) {
    setAuthToken(getLocalStorage(TOKEN_KEY));
  }
  startAuthLoading();
  try {
    const response = await axios.get(`${apiUrl}/auth`);
    if (response.data.success) {
      dispatch({
        type: AuthActionsType.SET_AUTH,
        payload: {
          isAuthenticated: true,
          user: response.data.user,
        },
      });
      return true;
    }
  } catch (error) {
    sessionStorage.removeItem(TOKEN_KEY);
    dispatch({
      type: AuthActionsType.SET_AUTH,
      payload: { isAuthenticated: false, user: null },
    });
    return false;
  }
};

export const loginUser =
  (userForm: { username: string; password: string }) =>
  async (dispatch: any, getState: any) => {
    startAuthLoading();
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      if (response.data.success) {
        setLocalStorage(TOKEN_KEY, response.data.accessToken);
        dispatch({
          type: AuthActionsType.SET_AUTH,
          payload: {
            isAuthenticated: true,
            user: null,
          },
        });
      }
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

export const registerUser =
  (userForm: { username: string; password: string; confirmPassword: string }) =>
  async (dispatch: any, getState: any) => {
    startAuthLoading();
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);
      if (response.data.success) {
        setLocalStorage(TOKEN_KEY, response.data.accessToken);
        dispatch({
          type: AuthActionsType.SET_AUTH,
          payload: {
            isAuthenticated: true,
            user: null,
          },
        });
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

export const logoutUser = () => (dispatch: any, getState: any) => {
  setLocalStorage(TOKEN_KEY, null);
  dispatch({
    type: AuthActionsType.SET_AUTH,
    payload: { isAuthenticated: false, user: null },
  });
};

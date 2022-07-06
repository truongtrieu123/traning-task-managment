import {
  AuthStore,
  AuthActions,
  AuthActionsType,
} from "./../../types/auth.type";

const initialState: AuthStore = {
  user: null,
  authLoading: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: AuthActions): AuthStore => {
  switch (action.type) {
    case AuthActionsType.SET_AUTH:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        authLoading: false,
      };
    case AuthActionsType.START_AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;

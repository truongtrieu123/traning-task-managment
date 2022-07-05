export type UserType = {
  username: string;
};

export type AuthStore = {
  authLoading: boolean;
  isAuthenticated: boolean;
  user: UserType | null;
};

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum AuthActionsType {
  SET_AUTH = "SET_AUTH",
  START_AUTH_LOADING = "START_AUTH_LOADING",
}

export interface AuthPayload {
  [AuthActionsType.SET_AUTH]: {
    isAuthenticated: boolean;
    user: any;
  };
  [AuthActionsType.START_AUTH_LOADING]: {};
}

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

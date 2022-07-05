export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "https://agile-brook-64346.herokuapp.com/api"
    : "https://agile-brook-64346.herokuapp.com/api";

export const TOKEN_KEY = "SSID";
export const USER = "user";
export const REDIRECT_KEY = "sign_in_redirect";

export const AlertMessageType = {
  danger: "danger",
  success: "success",
  info: "info",
  warning: "warning",
  primary: "primary",
  secondary: "secondary",
  light: "light",
  dark: "dark",
};

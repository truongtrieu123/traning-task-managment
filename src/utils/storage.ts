const TOKEN_KEY = "SSID";

export function getLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  return data;
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function deleteLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function getSessionStorage(key: string) {
  const data = sessionStorage.getItem(key);
  return data;
}

export function setSessionStorage(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

export function deleteSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}

export function clearSessionStorage() {
  sessionStorage.clear();
}

export function clearUser() {
  deleteLocalStorage(TOKEN_KEY);
}

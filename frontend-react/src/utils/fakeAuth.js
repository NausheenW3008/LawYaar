// src/utils/fakeAuth.js
// Temporary UI-only "auth" using localStorage/sessionStorage.
// No backend calls — swap these functions for real API calls later
// without touching any component code (same function names/shape).

const AUTH_KEY = "lawyaar_auth_user";

export function fakeLogin({ email, remember }) {
  const user = {
    email,
    loggedInAt: new Date().toISOString(),
  };

  if (remember) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } else {
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
  }

  return user;
}

export function fakeLogout() {
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(AUTH_KEY);
}

export function getFakeUser() {
  const raw =
    localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function isFakeAuthenticated() {
  return !!getFakeUser();
}

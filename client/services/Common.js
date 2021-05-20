//fetching services
// using session storage
//users
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

//tokens
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
};

//Setting Session
export const setUserSession = () => {
  sessionStorage.getItem('token', token);
  sessionStorage.getItem('user', JSON.stringify(user));
};

//Removing Session
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};

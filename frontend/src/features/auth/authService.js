import axios from "axios";

const API_URL = "/api/users/";

// register user
const register = async (userData) => {
  const resonse = await axios.post(API_URL, userData);
  if (resonse.data) {
    localStorage.setItem("user", JSON.stringify(resonse.data));
  }

  return resonse.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};
export default authService;

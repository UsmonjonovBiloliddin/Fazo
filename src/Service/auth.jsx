import axios from "./api";

const AuthService = {
  userRegister: async (users) => {
    const response = await axios.post("users/create_user", users);
    return response;
  },

  userLogin: async (user) => {
    const response = await axios.post("token", user, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  },
};

export default AuthService;

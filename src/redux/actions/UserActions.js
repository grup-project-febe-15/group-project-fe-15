import axios from "axios";
export const REGISTER_UP = "REGISTER_UP";
export const SIGN_IN = "SIGN_IN";
export const Masukberhasil = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};
export const Daftarberhasil = (user) => {
  return {
    type: REGISTER_UP,
    user,
  };
};
export const Signup = (user) => {
  return async (dispatch) => {
    const response = await axios.post("https://635538c3483f5d2df3afaee4.mockapi.io/users", user);
    dispatch(Daftarberhasil(response.data));
  };
};

export const Signin = (user) => {
  return async (dispatch) => {
    const response = await axios.get("https://635538c3483f5d2df3afaee4.mockapi.io/users", user);
    dispatch(Masukberhasil(response.data));
  };
};

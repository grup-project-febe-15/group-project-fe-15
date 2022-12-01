import axios from "axios";

export const masukServices = {
  masuk,
};

async function masuk(params) {
  let body = {
    username: params.username,
    password: params.password,
  };

  return axios
    .post("https://group-project-be-15-production.up.railway.app/signin", body)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}

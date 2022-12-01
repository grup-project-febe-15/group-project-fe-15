import axios from "axios";

export const materialServices = {
  getMaterials,
  getDetailMaterials,
};

async function getMaterials() {
  try {
    const response = await axios.get("https://group-project-be-15-production.up.railway.app/materials");
    // console.log(response.data.material);
    return response.data.material;
  } catch (error) {
    console.error(error);
  }
}

async function getDetailMaterials(_id) {
  return axios
    .get(`https://group-project-be-15-production.up.railway.app/materials/${_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });
}

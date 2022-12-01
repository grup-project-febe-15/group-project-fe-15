import axios from "axios";

export const artikelServices = {
  getArtikels,
  getDetailArtikels,
};

async function getArtikels() {
  try {
    const response = await axios.get("https://group-project-be-15-production.up.railway.app/articles");
    // console.log(response.data.article);
    return response.data.article;
  } catch (error) {
    console.error(error);
  }
}

async function getDetailArtikels(_id) {
  try {
    const response = await axios.get(`https://group-project-be-15-production.up.railway.app/articles/${_id}`);
    // console.log(response.data.article);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

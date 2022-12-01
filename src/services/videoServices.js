import axios from "axios";

export const videoServices = {
  getVideos,
  getDetailVideos,
};

async function getVideos() {
  try {
    const response = await axios.get("https://group-project-be-15-production.up.railway.app/videos");
    // console.log(response.data.video);
    return response.data.video;
  } catch (error) {
    console.error(error);
  }
}

async function getDetailVideos(_id) {
  try {
    const response = await axios.get(`https://group-project-be-15-production.up.railway.app/videos/${_id}`);
    // console.log(response.data.article);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

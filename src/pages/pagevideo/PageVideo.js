import React from "react";
import "./Video.css";
import CardVideo from "../../components/cardvideo/CardVideo";
import { useEffect, useState } from "react";

const PageVideo = () => {
  const url = "https://634cf141acb391d34a8f7b4a.mockapi.io/video-learning";
  const [video, setVideo] = useState([]);

  const getDataVideo = async () => {
    const response = await fetch(url);
    const dataVideo = await response.json();
    // console.log(dataVideo);

    setVideo(dataVideo);
    // console.log(video);
  };
  useEffect(() => {
    getDataVideo();
  });

  return (
    <>
      <section className="main pb-5">
        <div className="container">
          <h1 className="p-4 text-center">Video</h1>
          <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />
          <div id="videos" className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {video.map((item) => (
              // console.log(item.id)
              <CardVideo key={item.id} title={item.judul} deskripsi={item.deskripsi} thumbnail={item.thumbnail} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageVideo;

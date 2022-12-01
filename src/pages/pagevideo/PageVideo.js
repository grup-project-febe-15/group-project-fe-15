import React from "react";
import "./Video.css";
import CardVideo from "../../components/cardvideo/CardVideo";
import { useEffect, useState } from "react";
import { videoServices } from "../../services/videoServices";

const PageVideo = () => {
  const [video, setVideo] = useState([]);

  const getDataVideo = () => {
    const data = videoServices.getVideos();
    data.then((value) => setVideo(value));
  };
  useEffect(() => {
    getDataVideo();
  });

  return (
    <>
      <section className="main pb-5">
        <div className="container">
          <h1 className="p-4 text-center fw-bold">Video</h1>
          <hr className="border border-2 border-dark mx-auto w-25 bg-dark" />
          <div id="videos" className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {video.map((item) => (
              // console.log(item.id)
              <CardVideo id={item._id} title={item.title} thumbnail={item.pic} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageVideo;

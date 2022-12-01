import React, { useEffect, useState } from "react";
import CardDetail from "../detail/carddetail/CardDetail";
import { useParams } from "react-router-dom";
import { videoServices } from "../../../services/videoServices";

const DetailVideo = () => {
  const [detailvideo, setDetail] = useState();
  const params = useParams();
  const getDetailVideos = () => {
    videoServices.getDetailVideos(params._id).then((response) => {
      setDetail(response);
      console.log(response);
    });
  };

  useEffect(() => {
    getDetailVideos();
  });
  console.log(detailvideo);

  return (
    <>
      <section className="Detail Material">
        <div className="container">
          <CardDetail id={detailvideo?._id} video={detailvideo?.link} title={detailvideo?.title} deskripsi={detailvideo?.description} />
        </div>
      </section>
    </>
  );
};

export default DetailVideo;

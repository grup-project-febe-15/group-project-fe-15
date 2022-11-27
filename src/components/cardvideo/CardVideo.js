import React from "react";
import "./CardVideo.css";

function CardVideo(props) {
  return (
    <>
      <div className="col">
        <img src={props.thumbnail} alt="" className="w-100 mb-3" />
        <h4 className="fw-semibold">{props.title}</h4>
        <p>{props.deskripsi}</p>
        <div className="btn btn-lg btn-outline-transparant">View More</div>
      </div>
    </>
  );
}

export default CardVideo;

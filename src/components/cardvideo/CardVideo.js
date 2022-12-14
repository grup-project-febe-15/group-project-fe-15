import React from "react";
import "./CardVideo.css";
import { Link } from "react-router-dom";

function CardVideo(props) {
  return (
    <>
      <div className="col">
        <img src={props.thumbnail} alt="" className="w-100 mb-3" />
        <h4 className="fw-semibold">{props.title}</h4>
        <Link to={`/video/detail-video/${props.id}`} type="button" className="btn btn-sm btn-outline-transparant">
          View More
        </Link>
      </div>
    </>
  );
}

export default CardVideo;

import { Link } from "react-router-dom";

function CardDetail(props) {
  return (
    <>
      <div>
        <div className="row px-5 py-3">
          <div className="ratio ratio-21x9">
            <iframe
              id="video"
              width="560"
              height="315"
              src={props.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="title px-5 pt-5 pb-3 fw-bold fs-1">
            <h2 id="judul">{props.title}</h2>
          </div>
        </div>
        <div className="row px-5">
          <div dangerouslySetInnerHTML={{ __html: props.deskripsi }} />
          <Link to="/video">
            <button type="button" className="btn btn-primary mb-3 mt-2">
              KEMBALI
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardDetail;

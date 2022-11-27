import { Link } from "react-router-dom";
import "./CardDetail.css";

function CardDetail(props) {
  return (
    <>
      <div className="row px-5">
        <img id="img" className="img-fluid" src={props.img} alt="" />
      </div>
      <div className="title px-5 pt-5 pb-3">
        <div>{props.title}</div>
      </div>
      <div className="row px-5">
        <div className="paragraph py-3">
          <p>{props.paragraph}</p>
        </div>
        <Link to="/artikel">
          <button type="button" className="btn btn-primary mb-3">
            KEMBALI
          </button>
        </Link>
      </div>
    </>
  );
}

export default CardDetail;

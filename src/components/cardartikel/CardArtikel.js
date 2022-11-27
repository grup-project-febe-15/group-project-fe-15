import { Link } from "react-router-dom";
import "./CardArtikel.css";

function CardArtikel(props) {
  console.log(props);
  return (
    <>
      <div className="row py-5">
        <div className="col-lg-4">
          <img className="img-fluid" src={props.image} alt="" />
        </div>
        <div className="col-lg-8">
          <div className="title py-2">
            <h3>{props.title}</h3>
          </div>
          <div className="paragraph deskripsi">
            <div>{props.deskripsi}</div>
          </div>
          <div className="view-more">
            <div>
              {console.log(props)}
              <Link to={`/artikel/detail-artikel/${props.id}`} type="button" className="btn btn-sm btn-outline-transparant">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr></hr>
      </div>
    </>
  );
}

export default CardArtikel;

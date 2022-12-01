import { Link } from "react-router-dom";

function CardMaterial(props) {
  console.log(props);
  return (
    <>
      <div className="row p-2">
        <div className="col-lg-4">
          <img className="img-fluid" src={props.image} alt="" />
        </div>
        <div className="col-lg-8">
          <div className="title py-2">
            <h3>{props.title}</h3>
          </div>

          <div className="view-more">
            <div>
              {console.log(props)}
              <Link to={`/material/detail-material/${props.id}`} type="button" className="btn btn-sm btn-outline-transparant">
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

export default CardMaterial;

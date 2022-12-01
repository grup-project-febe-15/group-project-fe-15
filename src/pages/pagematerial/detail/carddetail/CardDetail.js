import { Link } from "react-router-dom";

function CardMaterial(props) {
  return (
    <>
      <div className="row px-5 py-3">
        <img id="img" className="img-fluid" src={props.image} alt={props.title} />
      </div>
      <div className="title px-5 pt-5 pb-3 fw-bold fs-1">
        <div>{props.title}</div>
      </div>
      <div className="row px-5">
        <div dangerouslySetInnerHTML={{ __html: props.paragraph }} />
        <Link to="/material">
          <button type="button" className="btn btn-primary mb-3 mt-2">
            KEMBALI
          </button>
        </Link>
      </div>
    </>
  );
}

export default CardMaterial;

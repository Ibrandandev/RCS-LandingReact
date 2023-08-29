const Card = ({ item }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <div className="card h-100 ">
        <div className="card-body d-flex flex-column align-items-center">
          <i className={`fa ${item.icono} text-primary`} aria-hidden="true"></i>
          <p className="text-muted fs-3 fs-md-2">{item.texto1}</p>
          <p className="text-muted">{item.texto2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

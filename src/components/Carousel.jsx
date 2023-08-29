import image1 from "../assets/02.jpg";
import image2 from "../assets/03.jpg";
import "../css/carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="..." />
        </div>
      </div>
      <div className="overlay">
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center w-75">
            Conoce al robot que hara tu vida más facil!
          </h3>
          <button className="btn btn-outline-light btn-lg">Ver Más</button>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

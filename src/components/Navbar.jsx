import { useEffect, useState } from "react";
import { obtenerDatosClima } from "../helpers/obtenerDatosClima";

const Navbar = () => {
  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    obtenerClima();
  }, []);

  const obtenerClima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coordenadas = pos.coords;
      const lat = coordenadas.latitude;
      const long = coordenadas.longitude;
      obtenerDatosClima(lat, long)
        .then((res) => {
          const { main, weather } = res;
          setTiempo({ temp: main.temp, clima: weather[0] });
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Kindel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contactos
                </a>
              </li>
              {tiempo && (
                <div className="d-flex align-items-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
                    className="w-25"
                    alt=""
                  />
                  <span>{tiempo.temp}°C</span>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // fetch(
  //   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
  // )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));

  // obtenerClima.then((res) => console.log(res));

  return (
    <>
      <Navbar />
      <Carousel />
      <CardList />
      <Footer />
    </>
  );
}

export default App;

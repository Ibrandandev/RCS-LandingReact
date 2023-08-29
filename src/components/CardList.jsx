import { detalleCard } from "../data/info";
import Card from "../components/Card";

const CardList = () => {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        {detalleCard.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

import { Valorant_agents } from "../Constants/constant";
import Card from "../Components/Card";
import "../Styles/Sections/Products.scss";
const Products = () => {
  return (
    <div className="product_section">
      <div className="Card_List">
        {Valorant_agents.map((item: any) => (
          <Card cardData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

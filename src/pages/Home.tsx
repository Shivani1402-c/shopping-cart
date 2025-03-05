import { products } from "../assets/data";
import Product from "../components/Product";
import { ProductInt } from "../type/type";

const Home = () => {
  return (
    <div className="container min-vh-80 py-4">
      <div className="row g-4">
        {products.map((item: ProductInt) => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

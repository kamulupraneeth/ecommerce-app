import "./Product.css";
import { Link } from "react-router-dom";

const ProductCard = ({ key, product }) => {
  return (
    <div key={key} className="individual-product-category">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <p>{product.title ? `${product.title.slice(0, 25)}...` : ""}</p>
        <p className="product-price">From ₹{product.price}</p>
      </Link>
    </div>
  );
};
export default ProductCard;

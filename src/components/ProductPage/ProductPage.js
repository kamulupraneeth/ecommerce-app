import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/actions/productActions";
import "./ProductPage.css";
import { addToCart } from "../../redux/actions/cartActions";
import { FaStar } from "react-icons/fa";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const cartItems = useSelector((state) => state.cart.cartItems);

  if (!selectedProduct) {
    return <p>Loading....</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
    navigate("/cart");
  };

  return (
    <div className="selected-product">
      <div>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="selected-image"
        />
        <div className="cart__buttons">
          <button
            className="cart__button cart__button--add"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button className="cart__button cart__button--buy">Buy now</button>
        </div>
      </div>
      <div>
        <p>{selectedProduct.title}</p>
        <p>{selectedProduct.description}</p>
        <span className="rating">
          {selectedProduct.rating.rate}
          <FaStar size={12} color="white" />
        </span>
        <p className="product__price">₹{selectedProduct.price}</p>
      </div>
    </div>
  );
};

export default ProductPage;

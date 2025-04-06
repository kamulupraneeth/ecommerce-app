import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
// import deleter
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import {
  decrementProductCount,
  incrementProductCount,
  removeFromCart,
} from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SET_CATEGORY_FILTER } from "../../redux/actionTypes/actionTypes";
import { setCategoryFilter } from "../../redux/actions/productActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  let itemPrice = null;

  const handleIncrement = (item) => {
    dispatch(incrementProductCount(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementProductCount(item.id));
  };

  return (
    <div className={!cartItems.length ? "cart-page" : null}>
      {cartItems.length === 0 ? (
        <div className="empty_cart_message">
          <p>Your cart is empty</p>
          <button
            onClick={() => {
              navigate("/");
              dispatch(setCategoryFilter(""));
            }}
          >
            Shop now
          </button>
        </div>
      ) : (
        <main className="cart-section">
          <section>
            <ul>
              {cartItems.map((item) => {
                const totalPrice = cartItems.reduce((total, item) => {
                  return total + item.price * item.count;
                }, 0);
                itemPrice = totalPrice.toFixed(2);
                return (
                  <div className="cartItem__container" key={item.title}>
                    <li className="cartItem">
                      <img src={item.image} alt={item.title} width={50} />
                      <div>
                        <p>{item.title}</p>
                        <p>Price: ₹{item.price}</p>
                      </div>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </li>
                    <div className="product__count--container">
                      <button
                        onClick={() => handleDecrement(item)}
                        disabled={item.count === 1}
                        className="product__count__container--btn"
                      >
                        <FiMinus size={15} />
                      </button>
                      <span className="cart__product__count">{item.count}</span>
                      <button
                        onClick={() => handleIncrement(item)}
                        className="product__count__container--btn"
                      >
                        <FiPlus size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </section>
          <section className="price-section">
            <p className="common-border price-title">Price Details</p>
            <ul className="common-border">
              <li>Price ({cartItems.length}item)</li>
              <li>₹{itemPrice}</li>
            </ul>
            <ul className="price-details common-border">
              <li>Total Amount</li>
              <li>₹{itemPrice}</li>
            </ul>
          </section>
        </main>
      )}
    </div>
  );
};

export default CartPage;

import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
// import deleter
import { FiTrash2 } from "react-icons/fi";
import { removeFromCart } from "../../redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  let itemPrice = null;

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <main className="cart-section">
          <section>
            <ul>
              {cartItems.map((item) => {
                itemPrice = item.price;
                return (
                  <li className="cartItem" key={item.title}>
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

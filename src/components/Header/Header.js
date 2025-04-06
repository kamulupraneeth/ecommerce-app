import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { persistor } from "../../redux/store";
import { logout } from "../../redux/actions/cartActions";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.length);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={handleNavigateToHome}
        style={{ cursor: "pointer" }}
      />
      <input
        type="text"
        className="search-input"
        placeholder="Search for products,brands and more"
      />
      <button
        className="login"
        onClick={() => {
          persistor.purge();
          dispatch(logout());
        }}
      >
        Login
      </button>
      <p>Become a seller</p>
      <p>More</p>
      {!isCartPage && (
        <div className="cart__count__container">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={15} />
            Cart {cartCount}
          </Link>
          {cartItems.length > 0 && (
            <span className="cart__count">{cartItems.length}</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

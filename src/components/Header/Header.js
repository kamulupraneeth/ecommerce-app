import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <input
        type="text"
        className="search-input"
        placeholder="Search for products,brands and more"
      />
      <button className="login">Login</button>
      <p>Become a seller</p>
      <p>More</p>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart size={15} />
        Cart {cartCount}
      </Link>
    </header>
  );
};

export default Header;

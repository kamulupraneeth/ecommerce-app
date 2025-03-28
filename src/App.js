import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/CartPage/CartPage";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {!cartItems.length && <Footer />}
    </Router>
  );
}

export default App;

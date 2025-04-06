import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/CartPage/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "./redux/actions/cartActions";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  if (isCartPage) return null;
  return (
    <footer className="footer-section-main">
      <main className="footer-section-container">
        <section className="footer-section">
          <p className="footer-section-title">about</p>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart stories</li>
            <li>Press</li>
            <li>Corporate information</li>
          </ul>
        </section>
        <section className="footer-section">
          <p className="footer-section-title">group companies</p>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart stories</li>
            <li>Press</li>
            <li>Corporate information</li>
          </ul>
        </section>
        <section className="footer-section">
          <p className="footer-section-title">help</p>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart stories</li>
            <li>Press</li>
            <li>Corporate information</li>
          </ul>
        </section>
        <section className="footer-section">
          <p className="footer-section-title">consumer policy</p>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart stories</li>
            <li>Press</li>
            <li>Corporate information</li>
          </ul>
        </section>
        <section className="footer-section border-add">
          <p className="footer-section-title">Mail Us:</p>
          <ul>
            <li>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </li>
          </ul>
        </section>
        <section className="footer-section">
          <p className="footer-section-title">Registered Office Address:</p>
          <ul>
            <li>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </li>
          </ul>
        </section>
      </main>
      <div>&copy; 2025 E-Shop. All Rights Reserved.</div>
    </footer>
  );
};
export default Footer;

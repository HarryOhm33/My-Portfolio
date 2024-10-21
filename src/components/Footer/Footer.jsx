import "./Footer.css";
import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            As a Full-Stack Web Developer, I am committed to continuous learning
            through practical experience, viewing challenges as opportunities
            for growth and development in my field.
          </p>
        </div>
        <div className="footer-top-right">
          <a href="https://www.linkedin.com/in/harryohm33/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/HarryOhm33/" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/harryohm33/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com/HarryOhm33" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Hari Om. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <Link to="/#contact">Connect with me</Link>
        </div>
      </div>
    </div>
  );
}

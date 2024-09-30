import "./Footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={logo} alt="" />
        <p>
          I'm a full stack web developer with experience on many live projects,
          who is looking forward to learn by making mistakes.
        </p>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-Left">
          © 2024 Hari Om. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

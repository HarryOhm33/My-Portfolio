import "./Footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            I'm a full stack web developer with experience on many live
            projects, who is looking forward to learn by making mistakes.
          </p>
        </div>
        <div className="footer-top-right">
          <a href="https://www.linkedin.com/in/harryohm33/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/HarryOhm33/" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/harryohm33/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com/HarryOhm33" target="_blank">
            <i class="fa-brands fa-twitter"></i>
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
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

import "./Navbar.css";
import logo from "../../assets/logo.svg";
import nav_underline from "../../assets/nav_underline.svg";

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <AnchorLink className="anchor-link" offset={0} href="#home">
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink className="anchor-link" offset={10} href="#about">
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("services")}>
          <AnchorLink className="anchor-link" offset={10} href="#services">
            <p>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("work")}>
          <AnchorLink className="anchor-link" offset={10} href="#work">
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink className="anchor-link" offset={10} href="#contact">
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={nav_underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={10} href="#contact">
          Connect With Me!
        </AnchorLink>
      </div>
    </div>
  );
}

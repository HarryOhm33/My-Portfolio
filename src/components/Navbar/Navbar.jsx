import "./Navbar.css";
import logo from "../../assets/logo.svg";
import nav_underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-23.85rem";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />
      <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
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

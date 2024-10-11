import "./Navbar.css";
import logo from "../../assets/logo.svg";
import nav_underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
          <Link className="anchor-link" offset={0} to="/#home">
            <p>Home</p>
          </Link>
          {menu === "home" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link className="anchor-link" offset={10} to="/#about">
            <p>About Me</p>
          </Link>
          {menu === "about" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("services")}>
          <Link className="anchor-link" offset={10} to="/#services">
            <p>Services</p>
          </Link>
          {menu === "services" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("work")}>
          <Link className="anchor-link" offset={10} to="/#work">
            <p>Portfolio</p>
          </Link>
          {menu === "work" ? <img src={nav_underline} /> : <></>}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link className="anchor-link" offset={10} to="/#contact">
            <p>Contact</p>
          </Link>
          {menu === "contact" ? <img src={nav_underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <Link className="anchor-link" offset={10} to="/#contact">
          Connect With Me!
        </Link>
      </div>
    </div>
  );
}

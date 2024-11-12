import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import resume from "../../assets/resume.pdf";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_img" />
      <h1>
        <span>I'm Hari Om</span>, Full Stack Web Developer Based In India
      </h1>
      <p>
        I am a full-stack web developer dedicated to continuous learning through
        hands-on experience and embracing challenges as opportunities for
        growth.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link to="/#contact">Connect With Me!</Link>
        </div>
        <div className="hero-resume">
          <a href={resume} download="Hari Om.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

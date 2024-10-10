import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_img" />
      <h1>
        <span>I'm Hari Om</span>, Full Stack Web Developer Based In India
      </h1>
      <p>
        I'm a full stack web developer, who is looking forward to learn by
        making mistakes.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={10} href="#contact">
            Connect With Me!
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

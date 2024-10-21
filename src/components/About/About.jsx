import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Full-Stack Web Developer with experience in delivering
              real-world projects. My career has been marked by challenges that
              have enhanced my skills and expertise in creating innovative
              solutions.
            </p>
            <p>
              My passion for web development is evident in the enthusiasm and
              dedication I bring to every project. I focus on delivering quality
              solutions that enhance user satisfaction and meet client
              expectations.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>LIVE PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>TECHNOLOGIES USED</p>
        </div>
      </div>
    </div>
  );
}

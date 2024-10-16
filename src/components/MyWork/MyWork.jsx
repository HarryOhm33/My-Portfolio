import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import projects from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="mywork-container">
        {projects.slice(0, 6).map((project, index) => {
          return (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="home-project"
            >
              <img src={project.image} alt="w-image" />
              <p>{project.name}</p>
            </Link>
          );
        })}
      </div>
      <Link to="/projects" className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </Link>
    </div>
  );
}

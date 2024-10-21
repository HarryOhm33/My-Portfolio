import "./Project.css";
import mywork_data from "../../assets/mywork_data";
import theme_pattern from "../../assets/theme_pattern.svg";

import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const project = mywork_data.find((item) => item.id == params.projectId);

  if (!project) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="project">
      <Link to="/projects" className="project-goback">
        <i class="fa-solid fa-arrow-left" />
        &nbsp; All Projects
      </Link>
      <img src={project.image} alt="project-pic" className="project-img" />
      <div className="project-title">
        <h1>{project.name}</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-project">
        <p>{project.description}</p>
        <p>
          &#9673; <b>Technologies Used &#9656;</b>{" "}
          {project.technologies.join(", ")}
        </p>
        <p>
          &#9673; <b>Hosted Link</b> &#9656;&nbsp;
          {project.hostedLink ? (
            <a
              href={project.hostedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here <i class="fa-solid fa-hand-point-right"></i>
            </a>
          ) : (
            <span>Not Hosted</span>
          )}
        </p>
        <p>
          &#9673; <b>GitHub Link</b> &#9656;&nbsp;
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here <i class="fa-solid fa-hand-point-right"></i>
            </a>
          ) : (
            <span>Not Hosted</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Project;

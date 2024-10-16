import mywork_data from "../../assets/mywork_data";
import theme_pattern from "../../assets/theme_pattern.svg";
import "react-vertical-timeline-component/style.min.css";
import "./Projects.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on component mount
  }, []);

  return (
    <div className="projects">
      <Link to="/#work" className="projects-goback">
        <i class="fa-solid fa-arrow-left" />
        &nbsp; Previous Page
      </Link>
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <VerticalTimeline>
        {mywork_data.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              icon={<img src={element.icon} />}
              iconClassName="timeline-icon"
            >
              <div className="timeline-project">
                <img className="timeline-img" src={element.image} alt="" />
                <h3 className="timeline-title">{element.name}</h3>
                <p className="timeline-description">
                  {element.miniDescription}
                </p>
                <Link
                  to={`/projects/${element.id}`}
                  className="timeline-explore"
                >
                  Explore More &nbsp;<i class="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;

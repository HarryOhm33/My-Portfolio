import { Navigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import "./Service.css";
import services_data from "../../assets/services_data";
import mywork_data from "../../assets/mywork_data";
import theme_pattern from "../../assets/theme_pattern.svg";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const service = services_data.find((item) => item.s_id == params.serviceId);

  if (!service) {
    return <Navigate to="/error" replace />;
  }

  const relatedProjects = mywork_data.filter((items) =>
    service.related_projects.includes(items.id)
  );

  return (
    <div className="service">
      <Link to="/#services" className="service-goback">
        <i className="fa-solid fa-arrow-left" />
        &nbsp; All Services
      </Link>
      <div className="service-detail">
        <h1>{service.s_name}</h1>
        <p>{service.s_desc}</p>
      </div>
      <div className="service-related">
        <div className="related-title">
          <h1>Related Projects</h1>
          <img src={theme_pattern} alt="theme" />
        </div>
        <div className="related-projects">
          {relatedProjects.map((relatedProject) => {
            return (
              <Link
                to={`/projects/${relatedProject.id}`}
                className="related-project"
                key={relatedProject.id}
              >
                <img src={relatedProject.image} alt="project" />
                <p>{relatedProject.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;

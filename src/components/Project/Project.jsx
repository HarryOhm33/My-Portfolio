import "./Project.css";
import mywork_data from "../../assets/mywork_data";

import { useParams } from "react-router-dom";

const Project = () => {
  const params = useParams();

  const project = mywork_data.find((item) => item.id == params.projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      {/* <img src={project.image} alt={project.name} /> */}
    </div>
  );
};

export default Project;

import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Service.css";
import services_data from "../../assets/services_data";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const service = services_data.find((item) => item.s_id == params.serviceId);

  if (!service) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="service">
      <h1>{service.s_name}</h1>
      <p>{service.s_desc}</p>
    </div>
  );
};

export default Service;

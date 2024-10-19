import { Link } from "react-router-dom";
import err_img from "../../assets/err_page.gif";
import "./Error_Page.css";

const Error_page = () => {
  return (
    <div className="error_page">
      <img src={err_img} />
      <h2>Not Found!</h2>
      <Link to="/">Go Back to HomePage</Link>
    </div>
  );
};

export default Error_page;

import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
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
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="w-image" />;
        })}
      </div>
      <Link to="/projects" className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </Link>
    </div>
  );
}

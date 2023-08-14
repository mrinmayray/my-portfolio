import { Col } from "react-bootstrap";
import "../assets/css/projectcard.css"

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>
            <a href={link} target="_blank" rel="noopener noreferrer" className="custom-link">
              {title}
            </a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

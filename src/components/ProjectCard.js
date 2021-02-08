import React from "react";
import "./ProjectCard.css";
import Thumbstack from "../Image/ThumbTack.png";
class ProjectCard extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className="projectCard">
          <img src={Thumbstack} className={this.props.thumbstack} />
          <img
            src={this.props.img}
            alt={this.props.name}
            className="projectImg"
          />
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}
export default ProjectCard;

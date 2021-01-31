import React from "react";
import styled from "styled-components";
import { ProjectCardLinks } from "./ProjectCardLinks";

const StyledProjectCard = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  height: 100%;
`;

export const ProjectCard = ({
  name,
  tags,
  pictureUrl,
  vertical,
  color,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <StyledProjectCard className="projectCard" color={color}>
      <div className="projectCard_content">
        <div className="projectCard_header">
          <h4 className="projectCard_name">{name.toUpperCase()}</h4>
          <div className="proctCard_tags">
            {tags.map((tag) => (
              <figure>{tag}</figure>
            ))}
          </div>
        </div>
        <div className="projectCard_details">
          <p className="projectCard_description">{description}</p>
          <ProjectCardLinks githubLink={githubLink} liveLink={liveLink} />
        </div>
      </div>
      <img src={`images/${pictureUrl}`} alt="" className="projectCard_image" />
    </StyledProjectCard>
  );
};

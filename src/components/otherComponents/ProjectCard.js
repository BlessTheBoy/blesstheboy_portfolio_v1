import React from "react";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  background-color: black;
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
  return <StyledProjectCard>This is a ProjectCard</StyledProjectCard>;
};

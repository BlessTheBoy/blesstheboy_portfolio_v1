import React from "react";
import styled, { css } from "styled-components";
import { ProjectCardLinks } from "./ProjectCardLinks";

const StyledProjectCard = styled.div`
  background: ${(props) => props.color};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  font-size: ${(props) => (props.size === "big" ? ".9em" : ".75em")};
  margin-bottom: ${(props) => (props.size === "big" ? "-2rem" : "0")};

  &:after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.accentColor};
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
  }

  &:hover {
    &::after {
      top: 0;
      opacity: 0.9;
    }

    [data-id="cardlinks"] {
      opacity: 1;
    }

    & .projectCard_name {
      color: #000;
    }

    & .projectCard_description {
      color: #444;
    }
  }
}

  & .projectCard_content {
    position: relative;
    padding: 2rem 2rem 1rem;
    z-index: 3;
  }

  & .projectCard_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2em;
  }

  & .projectCard_name {
    font-size: 2.2em;
    font-weight: 400;
    font-family: "Bebas Neue", cursive;
    margin-right: 1rem;    
    transition: all 0.5s ease-in-out;
  }
  & .projectCard_tags {
    max-width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & .projectCard_tags figure {
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    color: #a1a2a6;
    background-color: #4d4d52;
    border-radius: 4px;
    margin-left: 0.5em;
    margin-bottom: 0.5em;
  }
  & .projectCard_description {
    color: #ccc;    
    transition: all 0.5s ease-in-out;
    font-size: .9em;
  }

  [data-id="cardlinks"] {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 3;
    opacity: 0;    
    transition: all 0.5s ease-in-out;
  }

  & img {
    object-fit: contain;
    width: 90%;
    ${(props) =>
      props.vertical
        ? css`
            margin-left: 12%;
          `
        : css`
            transform: rotate(-4.45deg);
            margin-left: 5%;
          `}
  }
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
  size,
}) => {
  return (
    <StyledProjectCard
      className="projectCard"
      color={color}
      vertical={vertical}
      size={size}>
      <div className="projectCard_content">
        <div className="projectCard_header">
          <h4 className="projectCard_name">{name.toUpperCase()}</h4>
          <div className="projectCard_tags">
            {tags.map((tag) => (
              <figure>{tag}</figure>
            ))}
          </div>
        </div>
        <div className="projectCard_details">
          <p className="projectCard_description">{description}</p>
        </div>
      </div>
      <ProjectCardLinks githubLink={githubLink} liveLink={liveLink} />
      <img src={`images/${pictureUrl}`} alt="" className="projectCard_image" />
    </StyledProjectCard>
  );
};

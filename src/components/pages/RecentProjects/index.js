import React from "react";
import styled from "styled-components";
import { HomeSocials } from "../../otherComponents/HomeSocials";
import { Logo } from "../../otherComponents/Logo";
import { Nav } from "../../otherComponents/Nav";
import { ProjectsGrid } from "../../otherComponents/ProjectsGrid";

const StyledRecentProjects = styled.section`
  background-color: ${(props) => props.theme.projectBody};
  color: ${(props) => props.theme.fontColor};
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 1.5rem 4rem 0.5rem;

  & .recentProjects__container{
    width: 100%
    max-width: 1400px;
  }

  & .recentProjects__container h1{
    font-size: 3.5rem;
    font-weight: 700;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: .4rem;
  }

  [data-id="projectsGrid"]{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px;
    height: 90%;
  }
`;

export const RecentProjects = () => {
  return (
    <StyledRecentProjects>
      <div className="recentProjects__container">
        <Logo />
        <h1>PROJECTS</h1>
        <ProjectsGrid />
        {/* <Nav />
        <HomeSocials /> */}
      </div>
    </StyledRecentProjects>
  );
};

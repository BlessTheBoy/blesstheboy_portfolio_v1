import React from "react";
import styled from "styled-components";
import { HomeSocials } from "../../otherComponents/HomeSocials";
import { Logo } from "../../otherComponents/Logo";
import { Nav } from "../../otherComponents/Nav";
import { ProjectsGrid } from "../../otherComponents/ProjectsGrid";
import { NavLink } from "react-router-dom";

const StyledRecentProjects = styled.section`
  background-color: ${(props) => props.theme.projectBody};
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 1.5rem 4rem 0.5rem;
  font-size: 1rem;

  & .recentProjects__container{
    width: 100%
    max-width: 1400px;
    margin: 0 auto;
  }

  & .recentProjects__container h1{
    font-size: 3.5em;
    font-weight: 700;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: .2em;
    color: ${(props) => props.theme.accentColor};
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
  .recentProjects__nav{    
    position: absolute;
    top: 50%;
    right: 0;      
  }
  .recentProjects__nav .socials a svg{
    fill: ${(props) => props.theme.fontColor};
  }
  .recentProjects__nav .socials a:hover svg{
    fill: ${(props) => props.theme.accentColor};
  }

  .socials{
    display: flex;
    flex-direction: column;
    margin-top: 7.5em;
  }

  .socials a{
    margin-top: 1.5em;
    margin-right: 1rem;
  }

  .socials a svg{
    object-fit: contain;
    width: 25px;
  }
  [data-id="nav"]{
    position: absolute;
    top: 0;
    right: 0;      
    transform: translate(0, -50%);
  }

  .allProjects{    
    font-family: "Bebas Neue", cursive;
    color: ${(props) => props.theme.accentColor};
    font-size: 1.8em;    
    text-decoration: underline;
    position: absolute;
    bottom: 4rem;
    left: 20%;
  }

  @media only screen and (max-width: 900px){
    font-size: .8rem;
  }
  @media only screen and (max-width: 750px){
    font-size: .7rem;
  }
`;

export const RecentProjects = () => {
  return (
    <StyledRecentProjects id="projects">
      <div className="recentProjects__container">
        <Logo />
        <h1>PROJECTS</h1>
        <ProjectsGrid />
        {/* <HomeSocials /> */}
        <div className="recentProjects__nav">
          <Nav active="projects" />
          <div className="socials">
            <a href="https://twitter.com/BlessTheBoy_">
              <svg
                width="40"
                viewBox="0 0 40 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M40 4.5975C38.5125 5.25 36.9275 5.6825 35.275 5.8925C36.975 4.8775 38.2725 3.2825 38.8825 1.36C37.2975 2.305 35.5475 2.9725 33.6825 3.345C32.1775 1.7425 30.0325 0.75 27.6925 0.75C23.1525 0.75 19.4975 4.435 19.4975 8.9525C19.4975 9.6025 19.5525 10.2275 19.6875 10.8225C12.87 10.49 6.8375 7.2225 2.785 2.245C2.0775 3.4725 1.6625 4.8775 1.6625 6.39C1.6625 9.23 3.125 11.7475 5.305 13.205C3.9875 13.18 2.695 12.7975 1.6 12.195C1.6 12.22 1.6 12.2525 1.6 12.285C1.6 16.27 4.4425 19.58 8.17 20.3425C7.5025 20.525 6.775 20.6125 6.02 20.6125C5.495 20.6125 4.965 20.5825 4.4675 20.4725C5.53 23.72 8.545 26.1075 12.13 26.185C9.34 28.3675 5.7975 29.6825 1.9625 29.6825C1.29 29.6825 0.645 29.6525 0 29.57C3.6325 31.9125 7.9375 33.25 12.58 33.25C27.67 33.25 35.92 20.75 35.92 9.915C35.92 9.5525 35.9075 9.2025 35.89 8.855C37.5175 7.7 38.885 6.2575 40 4.5975Z" />
              </svg>
            </a>
            <a href="https://github.com/BlessTheBoy">
              <svg
                width="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9975 0C8.955 0 0 9.18112 0 20.5069C0 29.5655 5.73 37.2504 13.68 39.9644C14.68 40.1534 15.045 39.5202 15.045 38.9764C15.045 38.4887 15.0275 37.1994 15.0175 35.4888C9.455 36.727 8.28 32.739 8.28 32.739C7.3725 30.3697 6.06 29.7391 6.06 29.7391C4.2425 28.4676 6.195 28.4931 6.195 28.4931C8.2025 28.6387 9.2575 30.6071 9.2575 30.6071C11.0425 33.7399 13.94 32.836 15.08 32.3101C15.26 30.985 15.7775 30.0812 16.35 29.568C11.91 29.0497 7.24 27.2906 7.24 19.4346C7.24 17.1955 8.02 15.3649 9.3 13.93C9.0925 13.4117 8.4075 11.3258 9.495 8.50454C9.495 8.50454 11.175 7.95306 14.995 10.6058C16.59 10.1513 18.3 9.92409 20.0025 9.91643C21.7 9.92664 23.4125 10.1513 25.01 10.6083C28.8275 7.95561 30.505 8.50709 30.505 8.50709C31.595 11.3309 30.91 13.4142 30.705 13.9325C31.9875 15.3674 32.76 17.198 32.76 19.4371C32.76 27.3136 28.085 29.0472 23.63 29.5552C24.3475 30.1884 24.9875 31.4395 24.9875 33.3518C24.9875 36.0939 24.9625 38.3049 24.9625 38.9764C24.9625 39.5253 25.3225 40.1636 26.3375 39.9619C34.275 37.2453 40 29.5629 40 20.5069C40 9.18112 31.045 0 19.9975 0Z" />
              </svg>
            </a>
          </div>
        </div>
        <NavLink to="/allprojects" className="allProjects">
          All projects
        </NavLink>
        {/* <a href="" className="allProjects">
          All projects
        </a> */}
      </div>
    </StyledRecentProjects>
  );
};

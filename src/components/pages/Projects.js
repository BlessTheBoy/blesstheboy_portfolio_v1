import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ProjectLogo } from "../otherComponents/ProjectLogo";
import { useStateValue } from "../StateProvider";

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

const lineAnim = (length) => keyframes`
0% {
    stroke-dashoffset: ${length - 20};
    transform: rotate(0deg);
}
50% {
    stroke-dashoffset: 0;
}
100% {
    stroke-dashoffset: ${length - 20};
    transform: rotate(360deg);
}
`;

const StyledProjects = styled.div`
  background-color: ${(props) => props.projectTheme?.backgroundColor};
  color: ${(props) => props.projectTheme?.fontColor};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 1.5rem 4rem 0.5rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: "";
    background-image: url("images/overlay.png");
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: ${(props) => props.projectTheme?.backgroundOpacity};
  }

  .pmobile {
    display: none;
  }

  .projects__container {
    flex: 1;
    height: 100%;
    // overflow: hidden;
    max-height: 100%;
    overflow-y: hidden;
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  .projects__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .projects__header-socials {
    display: flex;
    align-items: center;
  }
  .projects__header-socials a {
    margin-left: 3rem;
  }
  .projects__header-socials a svg {
    fill: ${(props) => props.projectTheme?.headerColor};
    width: 25px;
  }
  .projects__header-socials a:hover svg {
    fill: ${(props) => props.projectTheme?.accentColor};
  }

  .projects__content {
    flex: 1;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .projects__progress {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .projects__progress p {
    color: ${(props) => props.projectTheme?.fontColor};
  }
  .progress {
    position: relative;
    height: 150px;
    margin: 0.5rem 0;
  }

  .progress__stroke {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 150px;
    width: 1px;
    background: ${(props) => props.projectTheme?.progessStroke};
  }
  .progress__bar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: height 0.3s ease-in-out;
    height: ${(props) =>
      ((props.index + 1) / props.projectsLength) * 150 + "px"};
    width: 3px;
    background: ${(props) => props.projectTheme?.progessBar};
  }
  .projects__controls {
    position: absolute;
    bottom: 50%;
    left: 10%;
    width: 80%;
    margin: 0 auto;
    transform: translateY(50%);
    display: flex;
    justify-content: space-between;
  }
  .prev,
  .next {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 90px;
    // width: fit-content;
  }
  .next {
    justify-content: flex-end;
  }
  .prev {
    justify-content: flex-start;
  }
  .prev {
    visibility: ${(props) => (props.index > 0 ? "visible" : "hidden")};
  }
  .next {
    visibility: ${(props) =>
      props.index + 1 !== props.projectsLength ? "visible" : "hidden"};
  }
  .prev:hover,
  .next:hover {
    & > svg {
      stroke: ${(props) => props.projectTheme?.accentColor};
      fill: ${(props) => props.projectTheme?.accentColor};
    }

    & .prevArr {
      p {
        bottom: 3px;
      }
      svg {
        bottom: -100%;
      }
    }
    & .nextArr {
      p {
        bottom: 3px;
      }
      svg {
        bottom: -100%;
      }
    }
  }
  .prev svg,
  .next svg {
    stroke: ${(props) => props.projectTheme?.navColor};
    fill: ${(props) => props.projectTheme?.navColor};
    margin: 0 5px;
  }
  .prevArr,
  .nextArr {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height: 23px;
    width: 30px;
    overflow: hidden;
  }
  .prevArr svg,
  .nextArr svg {
    position: absolute;
    bottom: 3px;
    transition: all 0.3s ease-in-out;
  }
  .prevArr p,
  .nextArr p {
    position: absolute;
    bottom: -100%;
    color: ${(props) => props.projectTheme?.accentColor};
    font-family: "Bebas Neue", cursive;
    transition: all 0.3s ease-in-out;
  }

  .prevArr svg,
  .nextArr svg {
    width: 20px;
  }

  .projects__details {
    width: 60%;
    margin: 1rem auto 0;
    color: ${(props) => props.projectTheme?.fontColor};
  }

  .details__header {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    z-index: 1;
  }
  .details__header h1 {
    font-size: 4em;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 5px;
    margin-right: 3rem;
    line-height: 1;
  }
  .details__tags {
    display: flex;
    margin-bottom: 0.4em;
    margin-top: 0.2em;
    justify-content: space-between;
    align-items: center;

    &-tag {
      flex: 1;
      display: flex;

      & p {
        font-size: 0.8em;
        height: fit-content;
        padding: 0.2em 0.5em;
        color: #a1a2a6;
        background-color: #4d4d52;
        border-radius: 4px;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
      }
    }
    .details__github {
      display: none;
    }
  }

  .details__image {
    position: relative;
    margin: 2rem auto 0;
    text-align: center;
    width: 80%;
    filter: drop-shadow(-20px 25px 12px rgba(0, 0, 0, 0.25));
    transform: rotate(-4.45deg);
  }
  .details__image #mainpic {
    object-fit: contain;
    width: 100%;
    margin: 0 auto;
  }
  .details__image #ducktape {
    object-fit: contain;
    position: absolute;
    width: 40%;
    right: -10%;
    top: -22%;
  }
  .details__description {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: left;
    padding: 1em;
    padding-top: 7em;
    width: 100%;
    z-index: 1;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  .details__description:after {
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    position: absolute;
    top: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: -1;
    transition: all 0.5s ease-in-out;
  }

  .details__image:hover .details__description {
    opacity: 1;

    &:after {
      top: 0;
    }
  }

  .details__github {
    display: flex;
    margin-top: 2rem;
    margin-left: 6%;
  }

  .details__github a {
    display: flex;
    align-items: center;
    color: ${(props) => props.projectTheme?.fontColor};
  }

  .details__github a svg {
    object-fit: contain;
    width: 22px;
    margin-right: 0.5rem;
    fill: ${(props) => props.projectTheme?.fontColor};
  }

  .details__github a p {
    display: flex;
    align-items: center;
  }

  .details__github a p svg {
    object-fit: contain;
    width: 12px;
    margin-left: 5px;
  }

  .details__github a:hover {
    color: ${(props) => props.projectTheme?.accentColor};

    & svg {
      fill: ${(props) => props.projectTheme?.accentColor};
    }
  }

  .liveButton {
    position: absolute;
    bottom: 5%;
    right: 10%;
  }
  .liveButton a svg {
    width: 120px;
    transition: all 0.5s ease-in-out;
  }

  .svgText {
    fill: ${(props) => props.projectTheme?.accentColor};
    transform-origin: 50% 50%;
    animation: ${rotate} 10s linear infinite;
  }
  .liveButton:hover {
    transform-origin: 50% 50%;
    transform: scale(1.1);
  }
  .liveButton:hover .svgText {
    animation-play-state: paused;
  }
  .liveButton:hover .liveCircle {
    animation-play-state: paused;
  }
  .liveCircle {
    transform-origin: 50% 50%;
    stroke: ${(props) => props.projectTheme?.progessBar};
    stroke-dasharray: ${(props) => props.liveCircleLength};
    stroke-dashoffset: ${(props) => props.liveCircleLength};
    animation: ${(props) => lineAnim(props.liveCircleLength)} 4s ease forwards
      infinite;
  }
  .stableCircle {
    stroke: ${(props) => props.projectTheme?.progessStroke};
  }
  @media only screen and (max-width: 950px) {
    padding: 1.5rem 2rem 0.5rem;

    .details__header h1 {
      font-size: 3em;
      letter-spacing: 3px;
      margin-right: 3rem;
      line-height: 1;
    }
  }
  @media only screen and (max-width: 750px) {
    .projects__controls {
      width: 94%;
      left: 3%;
    }
    .prev,
    .next {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 90px;

      & > svg {
        width: 30px;
        height: 4px;
      }
    }
    .prevArr svg,
    .nextArr svg {
      width: 15px;
    }
    .projects__details {
      width: 74%;
      margin: 0rem auto 0;
    }
    .liveButton a svg {
      width: 90px;
    }
    .details__tags p {
      font-size: 0.7em;
    }
  }
  @media only screen and (max-width: 550px) {
    padding: 1rem 0rem;

    .pmobile {
      display: block;
    }
    .pdesktop {
      display: none;
    }
    .projects__content {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
    .projects__header {
      padding: 0 1rem;
    }
    .projects__header-back {
      cursor: pointer;

      & svg {
        fill: ${(props) => props.projectTheme?.headerColor};
      }
    }
    .projects__header-back:hover svg {
      fill: ${(props) => props.projectTheme?.accentColor};
    }
    .projects__header-socials a svg {
      width: 20px;
    }
    .projects__header-socials a {
      margin-left: 0;
    }

    .projects__details {
      width: 86%;
      margin: 2rem auto 3rem;
      filter: drop-shadow(-7px 8px 5px rgba(0, 0, 0, 0.25));
    }

    .details__image {
      width: 92%;
      filter: none;
    }

    .details__tags {
      // flex: 1;
      width: 95%;
      justify-content: space-between;

      & p {
        font-size: 0.6em;
      }
      .details__github {
        margin: 0;
        display: flex;
        & a svg {
          width: 18px;
          margin-right: 0.3rem;
        }
        & a p {
          font-size: 0.7em;
          & svg {
            width: 10px;
          }
        }
      }
    }
    .details__header {
      flex-direction: column;
      align-items: flex-start;
    }
    .projects__progress {
      left: 10px;
    }
    .projects__progress p {
      color: ${(props) => props.projectTheme?.fontColor};
      font-size: 0.7rem;
    }
    .liveButton {
      // position: initial;
      bottom: 12%;
      right: 50%;
      transform: translate(50%, 50%);
    }
    .liveButton:hover {
      transform-origin: 50% 50%;
      transform: translate(50%, 50%) scale(1.1);
    }
    .projects__controls {
      bottom: 12%;
      left: 10%;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const Projects = () => {
  let history = useHistory();
  const [
    { projectsLength, projectDetails, projectIndex },
    dispatch,
  ] = useStateValue();
  const projectThemes = [
    {
      backgroundColor: "#302f30",
      backgroundOpacity: 0.6,
      fontColor: "#FFF",
      headerColor: "#FFF",
      navColor: "#CCCCCC",
      accentColor: "#BFFF00",
      progessBar: "#FFFFFF",
      progessStroke: "#AAAAAA",
      index: 13,
    },
    {
      backgroundColor: "#B07864",
      backgroundOpacity: 0.4,
      fontColor: "#FFF",
      headerColor: "#EEE",
      accentColor: "#BFFF00",
      progessBar: "#FFFFFF",
      progessStroke: "#AAAAAA",
      index: 13,
      navColor: "#EEE",
    },
    {
      backgroundColor: "#DCDDE0",
      backgroundOpacity: 0.4,
      fontColor: "#000",
      headerColor: "#333",
      accentColor: "#4169E1",
      progessBar: "#000",
      progessStroke: "#555",
      index: 13,
      navColor: "#333",
    },
    {
      backgroundColor: "#BD3326",
      backgroundOpacity: 0.4,
      fontColor: "#FFF",
      headerColor: "#CCC",
      accentColor: "#4169E1",
      progessBar: "#FFF",
      progessStroke: "#AAA",
      index: 13,
      navColor: "#CCC",
    },
    {
      backgroundColor: "#066C94",
      backgroundOpacity: 0.4,
      fontColor: "#FFF",
      headerColor: "#CCC",
      accentColor: "#BFFF00",
      progessBar: "#FFF",
      progessStroke: "#AAA",
      index: 13,
      navColor: "#CCC",
    },
    {
      backgroundColor: "#165041",
      backgroundOpacity: 0.4,
      fontColor: "#FFF",
      headerColor: "#CCC",
      accentColor: "#BFFF00",
      progessBar: "#FFF",
      progessStroke: "#AAA",
      index: 13,
      navColor: "#CCC",
    },
  ];
  const [themeIndex, setThemeIndex] = useState(0);

  const [projectTheme, setProjectTheme] = useState();
  const [liveStroke, setLiveStroke] = useState(null);
  const liveCircle = useRef();
  // const [projectDetails, setProjectDetails] = useState({
  //   index: 13,
  //   title: "Rock Paper Scissors",
  //   tags: ["React", "HTML", "SCSS"],
  //   imgUrl: "rockpaperscissors.jpg",
  //   description: "A fun game of Rock Paper Scissors",
  //   gitRepo: "rock-paper-scissors",
  //   liveUrl: "https://rock-paper-scissors-d464b.firebaseapp.com/",
  // });
  // const projectsLength = 68;

  useEffect(() => {
    setProjectTheme(projectThemes[themeIndex]);
    setLiveStroke(liveCircle.current.getTotalLength());
    document.addEventListener("keydown", keydownHandler);
  }, []);
  // useEffect(() => {
  //   setProjectTheme(projectThemes[themeIndex]);
  // }, [themeIndex]);

  const nextProject = () => {
    console.log("next project");
    dispatch({
      type: "NEXT_PROJECT",
    });
    let newIndex = themeIndex + 1 !== projectThemes.length ? themeIndex + 1 : 0;
    setThemeIndex(newIndex);
    setProjectTheme(projectThemes[newIndex]);
  };
  const prevProject = () => {
    dispatch({
      type: "PREV_PROJECT",
    });
    let newIndex = themeIndex === 0 ? projectThemes.length - 1 : themeIndex - 1;
    setThemeIndex(newIndex);
    setProjectTheme(projectThemes[newIndex]);
  };
  const keydownHandler = (e) => {
    if (e.keyCode === 37) prevProject();
    if (e.keyCode === 39) nextProject();
  };
  return (
    <StyledProjects
      projectTheme={projectTheme}
      liveCircleLength={liveStroke}
      index={projectIndex && projectIndex}
      projectsLength={projectsLength && projectsLength}>
      <div className="projects__container">
        <div className="projects__header">
          <div
            className="projects__header-back pmobile"
            onClick={() => history.goBack()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 11H7.8L13.4 5.4L12 4L4 12L12 20L13.4 18.6L7.8 13H20V11Z"
              />
            </svg>
          </div>
          <ProjectLogo
            color={projectTheme?.headerColor}
            accent={projectTheme?.accentColor}
          />

          <div className="projects__header-socials">
            <a
              href="https://twitter.com/BlessTheBoy_"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                width="40"
                viewBox="0 0 40 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M40 4.5975C38.5125 5.25 36.9275 5.6825 35.275 5.8925C36.975 4.8775 38.2725 3.2825 38.8825 1.36C37.2975 2.305 35.5475 2.9725 33.6825 3.345C32.1775 1.7425 30.0325 0.75 27.6925 0.75C23.1525 0.75 19.4975 4.435 19.4975 8.9525C19.4975 9.6025 19.5525 10.2275 19.6875 10.8225C12.87 10.49 6.8375 7.2225 2.785 2.245C2.0775 3.4725 1.6625 4.8775 1.6625 6.39C1.6625 9.23 3.125 11.7475 5.305 13.205C3.9875 13.18 2.695 12.7975 1.6 12.195C1.6 12.22 1.6 12.2525 1.6 12.285C1.6 16.27 4.4425 19.58 8.17 20.3425C7.5025 20.525 6.775 20.6125 6.02 20.6125C5.495 20.6125 4.965 20.5825 4.4675 20.4725C5.53 23.72 8.545 26.1075 12.13 26.185C9.34 28.3675 5.7975 29.6825 1.9625 29.6825C1.29 29.6825 0.645 29.6525 0 29.57C3.6325 31.9125 7.9375 33.25 12.58 33.25C27.67 33.25 35.92 20.75 35.92 9.915C35.92 9.5525 35.9075 9.2025 35.89 8.855C37.5175 7.7 38.885 6.2575 40 4.5975Z" />
              </svg>
            </a>
            <a
              className="pdesktop"
              href="https://github.com/BlessTheBoy"
              target="_blank"
              rel="noopener noreferrer">
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
        <div className="projects__content">
          <div className="projects__progress">
            <p className="currentProject">
              {projectIndex !== null && `${projectIndex + 1}`}
            </p>
            <div className="progress">
              <div className="progress__stroke"></div>
              <div className="progress__bar"></div>
            </div>

            <p className="totalProjects">{projectsLength && projectsLength}</p>
          </div>
          <div className="projects__controls">
            <div className="prev" onClick={() => prevProject()}>
              <div className="prevArr">
                <svg
                  width="26"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.39757 10.1615L12.3143 0.41155C12.6371 0.146117 13.0856 0.091984 13.4648 0.270734C13.8418 0.45055 14.0833 0.831917 14.0833 1.25005V8.71423L24.2309 0.41155C24.5549 0.146117 25.0023 0.091984 25.3814 0.270734C25.7584 0.45055 26 0.831917 26 1.25005V20.75C26 21.1682 25.7584 21.5495 25.3814 21.7294C25.233 21.7987 25.0738 21.8334 24.9167 21.8334C24.6708 21.8334 24.4281 21.7499 24.2309 21.5885L14.0834 13.2859V20.75C14.0834 21.1682 13.8418 21.5495 13.4648 21.7294C13.3164 21.7987 13.1571 21.8334 13.0001 21.8334C12.7541 21.8334 12.5115 21.7499 12.3143 21.5885L0.397619 11.8385C0.146301 11.6327 5.34058e-05 11.325 5.34058e-05 11C5.34058e-05 10.675 0.146252 10.3674 0.39757 10.1615Z" />
                </svg>

                <p>prev</p>
              </div>
              <svg
                width="50"
                viewBox="0 0 50 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2H50" stroke-width="3" />
              </svg>
            </div>
            <div className="next" onClick={() => nextProject()}>
              <svg
                width="50"
                viewBox="0 0 50 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2H50" stroke-width="3" />
              </svg>
              <div className="nextArr">
                <svg
                  width="26"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6024 11.8384L13.6857 21.5884C13.3629 21.8538 12.9144 21.908 12.5352 21.7292C12.1582 21.5494 11.9167 21.168 11.9167 20.7499L11.9167 13.2857L1.76907 21.5884C1.44513 21.8538 0.99775 21.908 0.618566 21.7292C0.241566 21.5494 0 21.168 0 20.7499L0 1.24989C0 0.83171 0.241566 0.450393 0.618566 0.270576C0.767 0.20126 0.92625 0.166576 1.08332 0.166576C1.32925 0.166576 1.57188 0.250011 1.76907 0.411394L11.9166 8.71408V1.24989C11.9166 0.83171 12.1582 0.450393 12.5352 0.270576C12.6836 0.20126 12.8429 0.166576 12.9999 0.166576C13.2459 0.166576 13.4885 0.250011 13.6857 0.411394L25.6024 10.1614C25.8537 10.3672 25.9999 10.6749 25.9999 10.9999C25.9999 11.3249 25.8537 11.6325 25.6024 11.8384Z" />
                </svg>

                <p>next</p>
              </div>
            </div>
          </div>
          <div className="projects__details">
            <div className="details__header">
              <h1>{projectDetails?.title}</h1>
              <div className="details__tags">
                <div className="details__tags-tag">
                  {projectDetails?.tags.map((tag) => (
                    <p>{tag}</p>
                  ))}
                </div>
                <div className="details__github pmobile">
                  <a
                    href={`https://github.com/BlessTheBoy/${projectDetails?.gitRepo}`}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.9975 0.416321C8.955 0.416321 0 9.40632 0 20.4963C0 29.3663 5.73 36.8913 13.68 39.5488C14.68 39.7338 15.045 39.1138 15.045 38.5813C15.045 38.1038 15.0275 36.8413 15.0175 35.1663C9.455 36.3788 8.28 32.4738 8.28 32.4738C7.3725 30.1538 6.06 29.5363 6.06 29.5363C4.2425 28.2913 6.195 28.3163 6.195 28.3163C8.2025 28.4588 9.2575 30.3863 9.2575 30.3863C11.0425 33.4538 13.94 32.5688 15.08 32.0538C15.26 30.7563 15.7775 29.8713 16.35 29.3688C11.91 28.8613 7.24 27.1388 7.24 19.4463C7.24 17.2538 8.02 15.4613 9.3 14.0563C9.0925 13.5488 8.4075 11.5063 9.495 8.74382C9.495 8.74382 11.175 8.20382 14.995 10.8013C16.59 10.3563 18.3 10.1338 20.0025 10.1263C21.7 10.1363 23.4125 10.3563 25.01 10.8038C28.8275 8.20632 30.505 8.74632 30.505 8.74632C31.595 11.5113 30.91 13.5513 30.705 14.0588C31.9875 15.4638 32.76 17.2563 32.76 19.4488C32.76 27.1613 28.085 28.8588 23.63 29.3563C24.3475 29.9763 24.9875 31.2013 24.9875 33.0738C24.9875 35.7588 24.9625 37.9238 24.9625 38.5813C24.9625 39.1188 25.3225 39.7438 26.3375 39.5463C34.275 36.8863 40 29.3638 40 20.4963C40 9.40632 31.045 0.416321 19.9975 0.416321Z" />
                    </svg>
                    <p>
                      Github{" "}
                      <svg
                        width="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.825 5.81596L14.4083 0.191032C14.2316 0.0077761 13.9608 -0.0497489 13.7251 0.0451597C13.4884 0.140984 13.3334 0.370168 13.3334 0.625139V3.33354H13.1251C8.64516 3.33354 5.00018 6.97852 5.00018 11.4584V12.7084C5.00018 12.9983 5.20434 13.24 5.48678 13.306C5.53271 13.3176 5.57848 13.3226 5.62426 13.3226C5.86016 13.3226 6.08599 13.1842 6.19509 12.9668C7.36679 10.6226 9.72257 9.16675 12.3434 9.16675H13.3334V11.875C13.3334 12.1301 13.4884 12.3593 13.7251 12.4542C13.9593 12.55 14.2316 12.4918 14.4083 12.3083L19.825 6.68342C20.0583 6.44096 20.0583 6.05934 19.825 5.81596Z" />
                        <path d="M17.5 19.9999H2.5002C1.12189 19.9999 0.000228882 18.8784 0.000228882 17.4999V5.83347C0.000228882 4.45516 1.12189 3.3335 2.5002 3.3335H5.00016C5.46097 3.3335 5.83343 3.70596 5.83343 4.16677C5.83343 4.62758 5.46097 5.00004 5.00016 5.00004H2.5002C2.04015 5.00004 1.66677 5.37342 1.66677 5.83347V17.4999C1.66677 17.96 2.04015 18.3333 2.5002 18.3333H17.5C17.9599 18.3333 18.3333 17.96 18.3333 17.4999V10.8334C18.3333 10.3726 18.7057 9.99999 19.1665 9.99999C19.6275 9.99999 20 10.3726 20 10.8334V17.4999C20 18.8784 18.8783 19.9999 17.5 19.9999Z" />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="details__image">
              <img src="images/ducktape.png" alt="ducktape" id="ducktape" />
              <img
                src={`images/${projectDetails?.imgUrl}`}
                alt={projectDetails?.title}
                id="mainpic"
              />
              <p className="details__description">
                ... {projectDetails?.description}
              </p>
            </div>
            <div className="details__github pdesktop">
              <a
                href={`https://github.com/BlessTheBoy/${projectDetails?.gitRepo}`}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9975 0.416321C8.955 0.416321 0 9.40632 0 20.4963C0 29.3663 5.73 36.8913 13.68 39.5488C14.68 39.7338 15.045 39.1138 15.045 38.5813C15.045 38.1038 15.0275 36.8413 15.0175 35.1663C9.455 36.3788 8.28 32.4738 8.28 32.4738C7.3725 30.1538 6.06 29.5363 6.06 29.5363C4.2425 28.2913 6.195 28.3163 6.195 28.3163C8.2025 28.4588 9.2575 30.3863 9.2575 30.3863C11.0425 33.4538 13.94 32.5688 15.08 32.0538C15.26 30.7563 15.7775 29.8713 16.35 29.3688C11.91 28.8613 7.24 27.1388 7.24 19.4463C7.24 17.2538 8.02 15.4613 9.3 14.0563C9.0925 13.5488 8.4075 11.5063 9.495 8.74382C9.495 8.74382 11.175 8.20382 14.995 10.8013C16.59 10.3563 18.3 10.1338 20.0025 10.1263C21.7 10.1363 23.4125 10.3563 25.01 10.8038C28.8275 8.20632 30.505 8.74632 30.505 8.74632C31.595 11.5113 30.91 13.5513 30.705 14.0588C31.9875 15.4638 32.76 17.2563 32.76 19.4488C32.76 27.1613 28.085 28.8588 23.63 29.3563C24.3475 29.9763 24.9875 31.2013 24.9875 33.0738C24.9875 35.7588 24.9625 37.9238 24.9625 38.5813C24.9625 39.1188 25.3225 39.7438 26.3375 39.5463C34.275 36.8863 40 29.3638 40 20.4963C40 9.40632 31.045 0.416321 19.9975 0.416321Z" />
                </svg>
                <p>
                  Github{" "}
                  <svg
                    width="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.825 5.81596L14.4083 0.191032C14.2316 0.0077761 13.9608 -0.0497489 13.7251 0.0451597C13.4884 0.140984 13.3334 0.370168 13.3334 0.625139V3.33354H13.1251C8.64516 3.33354 5.00018 6.97852 5.00018 11.4584V12.7084C5.00018 12.9983 5.20434 13.24 5.48678 13.306C5.53271 13.3176 5.57848 13.3226 5.62426 13.3226C5.86016 13.3226 6.08599 13.1842 6.19509 12.9668C7.36679 10.6226 9.72257 9.16675 12.3434 9.16675H13.3334V11.875C13.3334 12.1301 13.4884 12.3593 13.7251 12.4542C13.9593 12.55 14.2316 12.4918 14.4083 12.3083L19.825 6.68342C20.0583 6.44096 20.0583 6.05934 19.825 5.81596Z" />
                    <path d="M17.5 19.9999H2.5002C1.12189 19.9999 0.000228882 18.8784 0.000228882 17.4999V5.83347C0.000228882 4.45516 1.12189 3.3335 2.5002 3.3335H5.00016C5.46097 3.3335 5.83343 3.70596 5.83343 4.16677C5.83343 4.62758 5.46097 5.00004 5.00016 5.00004H2.5002C2.04015 5.00004 1.66677 5.37342 1.66677 5.83347V17.4999C1.66677 17.96 2.04015 18.3333 2.5002 18.3333H17.5C17.9599 18.3333 18.3333 17.96 18.3333 17.4999V10.8334C18.3333 10.3726 18.7057 9.99999 19.1665 9.99999C19.6275 9.99999 20 10.3726 20 10.8334V17.4999C20 18.8784 18.8783 19.9999 17.5 19.9999Z" />
                  </svg>
                </p>
              </a>
            </div>
          </div>
          <div className="liveButton">
            <a href={projectDetails?.liveUrl}>
              <svg
                width="173"
                viewBox="0 0 173 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M88.5449 86.3839C87.3182 87.6079 85.3302 87.6079 84.1035 86.3839C82.8773 85.1598 82.8773 83.1752 84.1035 81.9512C85.3302 80.7272 87.3182 80.7272 88.5449 81.9512C89.7712 83.1752 89.7712 85.1598 88.5449 86.3839Z"
                  fill={projectTheme?.progessBar}
                />
                <path
                  d="M92.835 91.1331C92.4524 91.1331 92.0698 90.9871 91.7786 90.6946C91.196 90.1113 91.1971 89.1661 91.7804 88.584C92.9626 87.4041 93.6134 85.8356 93.6134 84.1675C93.6134 82.4994 92.9626 80.9309 91.7804 79.7511C91.1971 79.1685 91.196 78.2237 91.7786 77.64C92.3607 77.0567 93.3059 77.0555 93.8892 77.6381C95.6366 79.382 96.5987 81.7006 96.5987 84.1675C96.5987 86.634 95.6366 88.953 93.8892 90.6969C93.598 90.9878 93.2165 91.1331 92.835 91.1331Z"
                  fill={projectTheme?.progessBar}
                />
                <path
                  d="M96.2113 95.5276C95.8287 95.5276 95.4461 95.3816 95.1548 95.0896C94.5722 94.5059 94.5733 93.5611 95.1567 92.9785C97.5149 90.6248 98.814 87.4958 98.814 84.1675C98.814 80.8392 97.5149 77.7102 95.1567 75.3565C94.5733 74.7739 94.5722 73.8291 95.1548 73.2454C95.7373 72.6621 96.6821 72.6609 97.2655 73.2435C100.189 76.1613 101.799 80.0408 101.799 84.1675C101.799 88.2942 100.189 92.1741 97.2655 95.0918C96.9742 95.3824 96.5927 95.5276 96.2113 95.5276Z"
                  fill={projectTheme?.progessBar}
                />
                <path
                  d="M79.8061 91.1331C79.4246 91.1331 79.0431 90.9878 78.7515 90.6969C77.0041 88.953 76.042 86.634 76.042 84.1675C76.042 81.7006 77.0041 79.382 78.7515 77.6381C79.3348 77.0555 80.28 77.0563 80.8622 77.64C81.4447 78.2233 81.4436 79.1685 80.8603 79.7511C79.6782 80.9309 79.0273 82.4994 79.0273 84.1675C79.0273 85.8356 79.6782 87.4041 80.8603 88.584C81.4436 89.1662 81.4447 90.1113 80.8622 90.6946C80.5709 90.9867 80.1883 91.1331 79.8061 91.1331Z"
                  fill={projectTheme?.progessBar}
                />
                <path
                  d="M76.4298 95.5277C76.048 95.5277 75.6665 95.3824 75.3752 95.0915C72.4518 92.1737 70.8418 88.2942 70.8418 84.1675C70.8418 80.0405 72.4518 76.1609 75.3752 73.2432C75.9585 72.661 76.9037 72.6617 77.4859 73.2454C78.0685 73.8288 78.0673 74.7735 77.484 75.3561C75.1258 77.7098 73.8267 80.8389 73.8267 84.1671C73.8267 87.4954 75.1258 90.6249 77.484 92.9785C78.0673 93.5611 78.0685 94.5059 77.4859 95.0896C77.1946 95.3816 76.812 95.5277 76.4298 95.5277Z"
                  fill={projectTheme?.progessBar}
                />
                <circle
                  className="stableCircle"
                  stroke={projectTheme?.progessStroke}
                  cx="86.4702"
                  cy="84.4702"
                  r="38.4702"
                  stroke="#555555"
                  stroke-width="2"
                />
                <circle
                  ref={liveCircle}
                  className="liveCircle"
                  cx="86.4702"
                  cy="84.4702"
                  r="37.4702"
                  stroke={projectTheme?.progessBar}
                  stroke-width="4"
                />
                <path
                  className="svgText"
                  d="M84.336 16.878H87.516V20.058H84.336V16.878Z"
                />
                <path
                  className="svgText"
                  d="M110.346 2.49018L113.475 3.6291L109.933 19.6755L109.989 19.696L117.591 5.12715L120.438 6.16347L110.267 24.8094L106.151 23.3113L110.346 2.49018Z"
                />
                <path
                  className="svgText"
                  d="M126.985 9.61414L129.843 11.2641L119.343 29.4507L116.485 27.8007L126.985 9.61414Z"
                />
                <path
                  className="svgText"
                  d="M126.813 35.2149C125.588 34.1865 124.95 33.064 124.9 31.8475C124.864 30.6156 125.392 29.3486 126.484 28.0463L127.256 27.127L129.646 29.1325L128.72 30.2356C127.846 31.2775 127.845 32.1648 128.719 32.8975C129.148 33.2575 129.572 33.4049 129.993 33.3397C130.441 33.2721 130.903 32.9549 131.379 32.388C131.944 31.7139 132.286 30.9955 132.404 30.2328C132.534 29.4547 132.488 28.3586 132.265 26.9443C131.995 25.1508 131.961 23.7129 132.165 22.6304C132.381 21.5325 132.881 20.5163 133.665 19.5818C134.732 18.3101 135.877 17.5996 137.099 17.4501C138.334 17.2852 139.564 17.7171 140.79 18.7455C142 19.7611 142.616 20.8784 142.637 22.0974C142.687 23.3139 142.165 24.5733 141.073 25.8756L140.513 26.5421L138.123 24.5366L138.818 23.7093C139.28 23.1577 139.507 22.6694 139.499 22.2443C139.503 21.8038 139.298 21.41 138.884 21.0629C138.041 20.3559 137.189 20.5156 136.328 21.5421C135.84 22.1243 135.536 22.7967 135.419 23.5594C135.316 24.335 135.376 25.4299 135.6 26.8442C135.885 28.6505 135.912 30.0962 135.681 31.1811C135.449 32.2661 134.909 33.3142 134.061 34.3254C132.955 35.643 131.777 36.3777 130.527 36.5297C129.292 36.6945 128.054 36.2563 126.813 35.2149Z"
                />
                <path
                  className="svgText"
                  d="M149.961 28.1424L152.082 30.6703L135.995 44.1689L133.874 41.6409L149.961 28.1424Z"
                />
                <path
                  className="svgText"
                  d="M156.095 41.6113L154.37 38.6235L156.969 37.1235L162.069 45.9569L159.47 47.4569L157.745 44.4691L142.157 53.4691L140.507 50.6113L156.095 41.6113Z"
                />
                <path
                  className="svgText"
                  d="M168.932 65.4073L169.505 68.6572L151.778 71.7829L152.721 77.1304L149.767 77.6513L148.251 69.0539L168.932 65.4073Z"
                />
                <path
                  className="svgText"
                  d="M170.904 82.3733V85.6733H149.904V82.3733H170.904Z"
                />
                <path
                  className="svgText"
                  d="M170.473 93.9116L169.894 97.191L153.477 96.4895L153.466 96.5486L169.134 101.504L168.608 104.488L148.479 97.7101L149.24 93.3967L170.473 93.9116Z"
                />
                <path
                  className="svgText"
                  d="M167.223 109.126L164.145 117.583L161.326 116.557L163.275 111.201L158.06 109.303L156.51 113.56L153.691 112.533L155.241 108.277L149.18 106.071L147.23 111.427L144.411 110.401L147.489 101.944L167.223 109.126Z"
                />
                <path
                  className="svgText"
                  d="M134.747 124.909C135.776 123.683 136.898 123.046 138.115 122.996C139.346 122.959 140.614 123.487 141.916 124.58L142.835 125.351L140.83 127.742L139.726 126.816C138.685 125.942 137.797 125.941 137.065 126.815C136.705 127.244 136.557 127.668 136.622 128.088C136.69 128.537 137.007 128.999 137.574 129.474C138.248 130.04 138.967 130.382 139.729 130.5C140.507 130.63 141.604 130.584 143.018 130.361C144.811 130.09 146.249 130.057 147.332 130.26C148.43 130.477 149.446 130.977 150.38 131.761C151.652 132.828 152.363 133.973 152.512 135.195C152.677 136.429 152.245 137.66 151.217 138.885C150.201 140.096 149.084 140.712 147.865 140.733C146.648 140.783 145.389 140.261 144.086 139.168L143.42 138.609L145.426 136.219L146.253 136.913C146.804 137.376 147.293 137.603 147.718 137.594C148.158 137.598 148.552 137.394 148.899 136.98C149.606 136.137 149.447 135.285 148.42 134.424C147.838 133.935 147.165 133.632 146.403 133.514C145.627 133.412 144.532 133.472 143.118 133.695C141.312 133.981 139.866 134.008 138.781 133.777C137.696 133.545 136.648 133.005 135.637 132.157C134.319 131.051 133.584 129.873 133.432 128.623C133.268 127.388 133.706 126.15 134.747 124.909Z"
                />
                <path
                  className="svgText"
                  d="M141.82 148.056L139.292 150.178L125.794 134.091L128.322 131.969L141.82 148.056Z"
                />
                <path
                  className="svgText"
                  d="M128.351 154.191L131.339 152.466L132.839 155.064L124.005 160.164L122.505 157.566L125.493 155.841L116.493 140.253L119.351 138.603L128.351 154.191Z"
                />
                <path
                  className="svgText"
                  d="M118.96 162.433L110.503 165.511L109.477 162.692L114.833 160.742L112.935 155.527L108.678 157.076L107.652 154.257L111.909 152.708L109.703 146.647L104.346 148.596L103.32 145.777L111.778 142.699L118.96 162.433Z"
                />
                <path
                  className="svgText"
                  d="M87.5305 151.18H84.3505V148H87.5305V151.18Z"
                />
                <path
                  className="svgText"
                  d="M61.5209 165.568L58.3917 164.429L61.9335 148.383L61.8771 148.362L54.2758 162.931L51.4286 161.895L61.5992 143.249L65.7151 144.747L61.5209 165.568Z"
                />
                <path
                  className="svgText"
                  d="M44.8818 158.444L42.0239 156.794L52.5239 138.607L55.3818 140.257L44.8818 158.444Z"
                />
                <path
                  className="svgText"
                  d="M45.0531 132.843C46.2788 133.872 46.9164 134.994 46.9661 136.211C47.0028 137.442 46.4749 138.709 45.3821 140.012L44.6108 140.931L42.2207 138.925L43.1463 137.822C44.0205 136.781 44.021 135.893 43.1477 135.16C42.7187 134.801 42.2941 134.653 41.8739 134.718C41.4256 134.786 40.9636 135.103 40.4879 135.67C39.9223 136.344 39.5805 137.063 39.4627 137.825C39.332 138.603 39.3782 139.699 39.6013 141.114C39.8718 142.907 39.9053 144.345 39.7019 145.428C39.4857 146.525 38.9854 147.542 38.2012 148.476C37.1342 149.748 35.9897 150.458 34.7677 150.608C33.5329 150.773 32.3026 150.341 31.0769 149.313C29.8666 148.297 29.2507 147.18 29.2292 145.961C29.1796 144.744 29.7011 143.485 30.7938 142.182L31.3531 141.516L33.7431 143.521L33.0489 144.349C32.5861 144.9 32.3591 145.389 32.3679 145.814C32.3639 146.254 32.5687 146.648 32.9823 146.995C33.825 147.702 34.677 147.542 35.5383 146.516C36.0268 145.934 36.33 145.261 36.4478 144.499C36.5503 143.723 36.49 142.628 36.2669 141.214C35.9811 139.408 35.954 137.962 36.1856 136.877C36.4172 135.792 36.9572 134.744 37.8057 133.733C38.9113 132.415 40.0892 131.68 41.3393 131.528C42.5742 131.364 43.8121 131.802 45.0531 132.843Z"
                />
                <path
                  className="svgText"
                  d="M21.9061 139.916L19.7849 137.388L35.8718 123.889L37.993 126.417L21.9061 139.916Z"
                />
                <path
                  className="svgText"
                  d="M15.7715 126.447L17.4965 129.435L14.8984 130.935L9.7984 122.101L12.3965 120.601L14.1215 123.589L29.7099 114.589L31.3599 117.447L15.7715 126.447Z"
                />
                <path
                  className="svgText"
                  d="M2.93525 102.651L2.36221 99.4008L20.0888 96.2752L19.1458 90.9277L22.1003 90.4067L23.6162 99.0041L2.93525 102.651Z"
                />
                <path
                  className="svgText"
                  d="M0.962157 85.6847V82.3847H21.9622V85.6847H0.962157Z"
                />
                <path
                  className="svgText"
                  d="M1.39426 74.1465L1.97251 70.867L18.3901 71.5686L18.4005 71.5095L2.73309 66.5536L3.25924 63.5696L23.388 70.3479L22.6274 74.6614L1.39426 74.1465Z"
                />
                <path
                  className="svgText"
                  d="M4.64359 58.932L7.72177 50.4748L10.5408 51.5008L8.59133 56.8571L13.8066 58.7553L15.356 54.4985L18.1751 55.5246L16.6257 59.7814L22.6867 61.9874L24.6362 56.6312L27.4553 57.6572L24.3771 66.1144L4.64359 58.932Z"
                />
                <path
                  className="svgText"
                  d="M37.1193 43.1489C36.0908 44.3745 34.9683 45.0122 33.7518 45.0619C32.52 45.0986 31.2529 44.5707 29.9506 43.4779L29.0314 42.7066L31.0369 40.3165L32.14 41.2421C33.1818 42.1163 34.0691 42.1168 34.8019 41.2435C35.1618 40.8145 35.3092 40.3899 35.2441 39.9697C35.1765 39.5214 34.8592 39.0594 34.2923 38.5837C33.6182 38.018 32.8998 37.6763 32.1371 37.5585C31.3591 37.4278 30.2629 37.474 28.8486 37.6971C27.0552 37.9676 25.6172 38.0011 24.5347 37.7977C23.4369 37.5815 22.4207 37.0812 21.4861 36.297C20.2145 35.23 19.5039 34.0855 19.3544 32.8635C19.1896 31.6287 19.6214 30.3984 20.6499 29.1727C21.6655 27.9624 22.7828 27.3465 24.0018 27.325C25.2183 27.2754 26.4777 27.7969 27.78 28.8896L28.4464 29.4489L26.4409 31.8389L25.6136 31.1447C25.062 30.6819 24.5737 30.4549 24.1486 30.4637C23.7082 30.4596 23.3144 30.6645 22.9673 31.0781C22.2602 31.9208 22.4199 32.7728 23.4464 33.6341C24.0286 34.1226 24.7011 34.4258 25.4638 34.5436C26.2393 34.6461 27.3343 34.5858 28.7486 34.3627C30.5549 34.0769 32.0005 34.0498 33.0855 34.2814C34.1704 34.513 35.2185 35.053 36.2297 35.9015C37.5473 37.0071 38.2821 38.185 38.434 39.4351C38.5989 40.67 38.1606 41.9079 37.1193 43.1489Z"
                />
                <path
                  className="svgText"
                  d="M30.0469 20.0017L32.5748 17.8805L46.0734 33.9675L43.5454 36.0887L30.0469 20.0017Z"
                />
                <path
                  className="svgText"
                  d="M43.5153 13.867L40.5275 15.592L39.0275 12.9939L47.861 7.8939L49.361 10.492L46.3732 12.217L55.3732 27.8054L52.5153 29.4554L43.5153 13.867Z"
                />
                <path
                  className="svgText"
                  d="M52.9066 5.62548L61.3639 2.54729L62.3899 5.36637L57.0337 7.31589L58.9319 12.5312L63.1887 10.9818L64.2148 13.8009L59.958 15.3503L62.164 21.4113L67.5202 19.4618L68.5463 22.2808L60.0891 25.359L52.9066 5.62548Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
};

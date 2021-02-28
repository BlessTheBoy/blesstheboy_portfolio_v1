import React, { useState } from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

const StyledProjectsGrid = styled.div.attrs({ "data-id": "projectsGrid" })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;

  & .card-container {
  }

  @media only screen and (max-width: 750px) {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`;
export const ProjectsGrid = () => {
  const [topProjects, setTopProjects] = useState([
    {
      name: "Rock Paper Scissors",
      tags: ["React", "HTML", "SCSS"],
      pictureUrl: "rockpaperscissors.jpg",
      vertical: false,
      color:
        "radial-gradient(84.05% 84.05% at 22.24% 15.95%, #16191E 0%, #1A1E25 100%)",
      description: "A Rock Paper Scissors game.",
      githubLink: "https://github.com/BlessTheBoy/rock-paper-scissors/",
      liveLink: "https://rock-paper-scissors-d464b.firebaseapp.com/",
      grid: { column: "1/2", row: "1/3" },
      size: "big",
    },
    {
      name: "Chat App",
      tags: ["React", "HTML", "SCSS", "Firebase"],
      pictureUrl: "chatapp.png",
      vertical: true,
      color:
        "radial-gradient(84.05% 84.05% at 22.24% 15.95%, #2D3037 0%, #202838 100%)",
      description: "A live chat app for instant messaging",
      githubLink: "https://github.com/BlessTheBoy/facebook-messenger-clone/",
      liveLink: "https://facebook-messenger-clone-7efc7.firebaseapp.com/",
      grid: { column: "2/3", row: "1/2" },
      size: "small",
    },
    {
      name: "Todo App",
      tags: ["React", "HTML", "SCSS", "Firebase"],
      pictureUrl: "todoapp.png",
      vertical: true,
      color:
        "radial-gradient(84.05% 84.05% at 22.24% 15.95%, #181B2C 0%, #20243E 100%)",
      description:
        "An Todo List application for keeping and manging todos to help you stay productive.",
      githubLink: "https://github.com/BlessTheBoy/react-todo-app/",
      liveLink: "https://react-todo-47283.firebaseapp.com/",
      grid: { column: "2/3", row: "2/3" },
      size: "small",
    },
  ]);
  return (
    <StyledProjectsGrid>
      {topProjects.map(
        ({
          name,
          tags,
          pictureUrl,
          vertical,
          color,
          description,
          githubLink,
          liveLink,
          grid,
          size,
        }) => (
          <ProjectCard
            key={name}
            name={name}
            size={size}
            description={description}
            tags={tags}
            pictureUrl={pictureUrl}
            vertical={vertical}
            color={color}
            githubLink={githubLink}
            liveLink={liveLink}
            grid={grid}
          />
        )
      )}
    </StyledProjectsGrid>
  );
};

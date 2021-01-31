import React, { useState } from "react";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

const StyledProjectsGrid = styled.div`
  display: flex;
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
        }) => (
          <div
            className="card-container"
            style={{ width: "400px", height: "400px" }}>
            <ProjectCard
              name={name}
              description={description}
              tags={tags}
              pictureUrl={pictureUrl}
              vertical={vertical}
              color={color}
              githubLink={githubLink}
              liveLink={liveLink}
            />
          </div>
        )
      )}
    </StyledProjectsGrid>
  );
};

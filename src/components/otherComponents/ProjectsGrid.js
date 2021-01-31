import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";

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
      githubLinK: "https://github.com/BlessTheBoy/rock-paper-scissors",
      liveLink: "https://rock-paper-scissors-d464b.firebaseapp.com/",
    },
  ]);
  return (
    <div>
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
    </div>
  );
};

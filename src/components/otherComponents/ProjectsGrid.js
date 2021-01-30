import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGrid = () => {
  return (
    <div>
      <div
        className="card-container"
        style={{ width: "400px", height: "400px" }}>
        <ProjectCard />
      </div>
    </div>
  );
};

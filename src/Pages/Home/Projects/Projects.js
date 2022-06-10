import React, { useEffect, useState } from "react";
import Project from "../Project/Project";

const Projects = ({ setProject }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="p-3 lg:mx-14 mb-8" id="projects">
      <h2 className="text-4xl text-center font-bold text-primary mb-5">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map((project) => (
          <Project
            key={project._id}
            project={project}
            setProject={setProject}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

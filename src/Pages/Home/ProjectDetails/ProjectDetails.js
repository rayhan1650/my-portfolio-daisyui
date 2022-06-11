import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const url = `https://radiant-oasis-72365.herokuapp.com/projects/${id}`;
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [url]);
  const demo = project?.features?.split(". ");
  console.log(demo);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={project.img} alt="" />
          <img className="py-3" src={project.img2} alt="" />
          <img src={project.img3} alt="" />
        </div>

        <div className=" lg:ml-10">
          <h1 className="text-3xl lg:text-5xl font-bold">{project.name}</h1>
          <p className="py-6">{project.briefDesc}</p>
          <h2 className="text-2xl lg:text-4xl font-bold">Project Features</h2>
          <ol className="list-disc pl-6">
            {project?.features?.split(". ").map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ol>
          <a
            href={project.link}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

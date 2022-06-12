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

  return (
    <div className="hero min-h-screen drop-shadow-lg w-fit mx-auto bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <div className="drop-shadow-lg hover:ring ring-primary ring-offset-base-100 ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={project.img} alt="" />
          </div>
          <div className="drop-shadow-lg my-5 ring ring-red-600 hover:ring-primary ring-offset-base-100 ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={project.img2} alt="" />
          </div>
          <div className="drop-shadow-lg hover:ring ring-primary ring-offset-base-100 ring-offset-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={project.img3} alt="" />
          </div>
        </div>

        <div className=" lg:ml-10">
          <h1 className="text-3xl lg:text-5xl font-bold">{project.name}</h1>
          <p className="py-6 text-lg">{project.briefDesc}</p>
          <h2 className="text-2xl lg:text-4xl font-bold">Project Features</h2>
          <ol className="list-disc pl-6 text-lg">
            {project?.features?.split(". ").map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ol>
          <div className="my-4 flex justify-between">
            <a
              href={project.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>

            <a
              href={project.gitLink}
              className="btn text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

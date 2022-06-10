import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project, setProject }) => {
  const { _id, name, briefDesc, img, link } = project;
  const navigate = useNavigate();
  const handleProject = (id) => {
    setProject(project);
    navigate(`/projects/${id}`);
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Project pic" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{briefDesc}</p>
        <div className="card-actions justify-between">
          <button
            onClick={() => handleProject(_id)}
            className="btn btn-primary"
          >
            More Info
          </button>
          <a
            href={link}
            className="btn text-white"
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

export default Project;

import React from "react";

const ProjectDetails = ({ project }) => {
  const { _id, name, briefDesc, img, link } = project;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={img} alt="" />
        </div>

        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{briefDesc}</p>
          <a
            href={link}
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

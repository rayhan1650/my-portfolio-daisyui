import React from "react";

const Project = ({ project }) => {
  const { name, briefDesc, img } = project;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Project pic" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{briefDesc}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Project;

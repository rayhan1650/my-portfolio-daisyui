import React from "react";
import Project from "../Project/Project";

const Projects = () => {
  const projects = [
    {
      _id: 1,
      name: "Parts Manufacturer",
      img: "https://i.ibb.co/QF20Q8T/parts-Manufacturer.jpg",
      briefDesc:
        "Car Parts Manufacturer is a manufacturer website developed by reactjs and expressjs.",
    },
    {
      _id: 2,
      name: "Bike House",
      img: "https://i.ibb.co/qyvDW75/bike-House.jpg",
      briefDesc:
        "This is a bike warehouse website. In the home page you see some inventory items with some information.",
    },
    {
      _id: 3,
      name: "Tech Tutor",
      img: "https://i.ibb.co/wRJfHTS/tech-Tutor.jpg",
      briefDesc:
        "Tech Tutor is a individual service provider website developed using Bootstrap and ReactJs.",
    },
  ];
  return (
    <section className="p-3 lg:mx-14 mb-8">
      <h2 className="text-4xl text-center font-bold text-primary mb-5">
        My Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

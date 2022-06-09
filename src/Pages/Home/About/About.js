import React from "react";
import Me from "../../../assets/images/me.png";

const About = () => {
  return (
    <section className="my-8">
      <h2 className="text-4xl text-center font-bold text-primary">About Me</h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hover:ring ring-primary ring-offset-base-100 ring-offset-2 lg:w-full">
            <img
              src={Me}
              className="max-w-sm rounded-lg shadow-2xl  w-72 lg:w-full"
              alt="profile pic"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-info">Hello</h1>
            <p className="py-6 text-justify lg:pr-3 text-lg">
              I'm Nur Md. Rayhan. Currently I'm studying M.Sc(Engg.) in Computer
              Science and Engineering in Mawlana Bhashani Science and Technology
              University. I have worked with HTML, CSS, Bootstrap, Tailwind,
              ReactJS, firebase, Mongo db, NodeJs ExpressJs. I am currently
              studying and learning new technologies. I have done some projects
              on react and NodeJs.
            </p>
            <button className="btn btn-primary">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

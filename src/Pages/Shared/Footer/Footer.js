import React from "react";
import Wave from "react-wavify";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative">
      <Wave
        className="h-60"
        fill="url(#gradient)"
        options={{ points: 12, speed: 0.2, amplitude: 20 }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="rgb(244 114 182)" />
            <stop offset="50%" stopColor="rgb(168 85 247)" />
            <stop offset="90%" stopColor="rgb(99 102 241)" />
          </linearGradient>
        </defs>
      </Wave>
      <div className="absolute top-1/2 left-auto md:left-1/2 translate-x-1/3 md:-translate-x-1/2">
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/nurmdrayhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin2 className="text-white bg-blue-800 p-1 rounded-lg text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/nurmohammad.rayhan.9/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaFacebookF className="text-white bg-blue-600 p-1 rounded-lg text-2xl " />
          </a>
          <a
            href="https://twitter.com/RAYHAN_1650"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="text-white bg-blue-500 p-1 rounded-lg text-2xl " />
          </a>
          <a
            href="https://github.com/rayhan1650"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <BsGithub className="text-black bg-white p-1 rounded-lg text-2xl " />
          </a>
        </div>
        <h1 className="text-white text-sm md:text-2xl">
          &copy; All Right Reserved by Rayhan
        </h1>
      </div>
    </div>
  );
};

export default Footer;

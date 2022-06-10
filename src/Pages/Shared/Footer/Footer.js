import React from "react";
import Wave from "react-wavify";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
        <h1 className="text-white text-2xl">
          &copy; All Right Reserved by Rayhan
        </h1>
      </div>
    </div>
  );
};

export default Footer;

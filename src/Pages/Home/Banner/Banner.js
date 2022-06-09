import React from "react";

const Banner = () => {
  return (
    <div className="h-60 flex flex-col justify-end items-center pb-10 lg:h-96 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-400">
      <h2 className="text-2xl lg:text-4xl text-base-100 font-bold">
        Hello I'm Nur Md. Rayhan
      </h2>
      <h4 className="text-xl lg:text-2xl font-bold">WEB DEVELOPER</h4>
      <a
        href="https://drive.google.com/file/d/1EsvQcZ-IMCKBgL-W9drECCs8nlXJlaZL/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm text-white mt-3 lg:hidden"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Banner;

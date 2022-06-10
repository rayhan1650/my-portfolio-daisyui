import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const url = `projects.json/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [url]);
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default ProjectDetails;

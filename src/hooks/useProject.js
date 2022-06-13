import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProject = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((p) => p._id == id);
        setProject(item);
      });
  }, [id]);
  return [project];
};

export default useProject;

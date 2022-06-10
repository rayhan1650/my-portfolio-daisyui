import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import ProjectDetails from "./Pages/Home/ProjectDetails/ProjectDetails";
import Header from "./Pages/Shared/Header/Header";

function App() {
  const [project, setProject] = useState({});
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home setProject={setProject} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path={`/projects/:id`}
          element={<ProjectDetails project={project} />}
        />
      </Routes>
    </div>
  );
}

export default App;

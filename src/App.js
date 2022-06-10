import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import ProjectDetails from "./Pages/Home/ProjectDetails/ProjectDetails";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home/:id" element={<ProjectDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;

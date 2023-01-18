import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import OverviewPage from "./Pages/OverviewPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import { useState } from "react";
function App() {
  const [closed, setClosed] = useState(false);
  const handleFilesDisplay = () => {
    setClosed((prevClosed) => !prevClosed);
  };
  return (
    <Router>
      <Navbar closedHandle={handleFilesDisplay} closed={closed} />
      <Routes className="body">
        <Route exact path="/" element={<OverviewPage closed={closed} />} />
        <Route exact path="/skills" element={<SkillsPage closed={closed} />} />
        <Route
          exact
          path="/projects"
          element={<ProjectsPage closed={closed} />}
        />
        <Route
          exact
          path="/contact"
          element={<ContactPage closed={closed} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

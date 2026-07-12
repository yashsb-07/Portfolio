import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Experience from "../pages/Experience/Experience";
import Education from "../pages/Education/Education";
import Achievements from "../pages/Achievements/Achievements";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
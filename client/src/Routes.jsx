import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aboutus from "./pages/Aboutus/Aboutus";
import Support from "./pages/Support/Support";
import Contact from "./pages/Contact/Contact";
import Submission from "./pages/Submission/Submission";
import Resources from "./pages/Resources/Resources";
import ExProjects from "./pages/ExProjects/ExProjects";
import Biblo from "./pages/Biblo/Biblo";
import Projects from "./pages/Projects/Projects.jsx";
import Openings from "./pages/Openings/Openings";

const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Navbar"/>
          <Route path="/About" element={<Aboutus />}/>
          <Route path="/Resources" element={<Resources/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Submission" element={<Submission />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Openings" element={<Openings />}/>
          <Route path="/Support" element={<Support/>}/>
          <Route path="/Examples" element={<ExProjects/>}/>
          <Route path="/biblo" element={<Biblo/>}/>
          <Route path="*"/>
        </Routes>
      </Suspense>
    </Router>
    <Footer/>
    </>
  );
};

export default AppRoute;

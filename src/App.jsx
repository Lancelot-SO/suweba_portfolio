import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import FirstProjectPage from "./components/FirstProjectPage";
import SecondProjectPage from "./components/SecondProjectPage";
import thirdProjectPage from "./components/thirdProjectPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/firstprojectpage" element={<FirstProjectPage />}></Route>
        <Route
          path="/secondprojectpage"
          element={<SecondProjectPage />}
        ></Route>
        <Route path="/thirdprojectpage" element={<thirdProjectPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

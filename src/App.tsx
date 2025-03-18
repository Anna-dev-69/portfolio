import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import AboutMe from "./components/main/about-me/about-me.component";
import MySkills from "./components/main/my-skills/my-skills.component";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/mySkills" element={<MySkills />} />
      </Routes>
    </Router>
  );
}

export default App;

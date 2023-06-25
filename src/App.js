import React from "react";
import "./Styles/style.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import YouTube from "./components/Home/YouTube";
import UploadPage from "./components/Home/UploadPage";
import MeetingStatus from "./components/Home/MeetingStatus";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/meet" element={<MeetingStatus />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

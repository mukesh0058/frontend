import React from "react";
import "./Styles/style.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import YouTube from "./components/Home/YouTube";
import UploadPage from "./components/Home/UploadPage";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/youtube" element={<YouTube />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

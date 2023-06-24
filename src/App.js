import React from "react";
import "./Styles/style.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

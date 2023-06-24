import React from 'react';
import './Styles/style.scss';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

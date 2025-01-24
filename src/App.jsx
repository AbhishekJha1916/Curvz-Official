import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/LoginPage";
import SignUpPage from "./pages/authentication/SignUpPage";
import './App.css';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/user/auth/login" element={<LoginPage />} />
        <Route path="/user/auth/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

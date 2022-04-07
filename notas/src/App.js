import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./pages/Add";
import Home from "./pages/Home";
import View from "./pages/View";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-right" />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/update/:id" element={<Add />} />
          <Route exact path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

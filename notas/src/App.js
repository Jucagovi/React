import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cabecera from "./components/Cabecera";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import AcercaDe from "./pages/AcercaDe.js";
import Pie from "./components/Pie";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row></Row>
        <Col>
          <ToastContainer position="top-right" />
          <Cabecera />
        </Col>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acercade" element={<AcercaDe />} />
              {/*   <Route path="/add" element={<AddPractica />} />
              <Route path="/addnota" element={<AddNota />} />
              <Route path="/view/:id" element={<View />} /> */}
              {/* <Route path="/view/:param1/:param2/:param3" element={<View />} /> para varios parámetros */}
            </Routes>
          </Col>
        </Row>
        <Row>
          <Pie />
        </Row>
      </BrowserRouter>
      {/* <div className="App"></div> */}
    </Container>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddPractica from "./pages/AddPractica";
import Home from "./pages/Home";
import View from "./pages/View";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddNota from "./pages/AddNota";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col>
            <ToastContainer position="top-right" />
            <Header />
            <Menu />
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddPractica />} />
              <Route path="/addnota" element={<AddNota />} />
              <Route path="/view/:id" element={<View />} />
              {/* <Route path="/view/:param1/:param2/:param3" element={<View />} /> para varios parámetros */}
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
      <div className="App"></div>
    </Container>
  );
}

export default App;

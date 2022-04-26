import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cabecera from "./components/Cabecera";
import HomePagina from "./pages/HomePagina";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import AcercaDePagina from "./pages/AcercaDePagina.js";
import Pie from "./components/Pie";
import ModulosPagina from "./pages/ModulosPagina";
import { NotasProveedor } from "./estado/notasContext";
import DiscentesPagina from "./pages/DiscentesPagina";

function App() {
  return (
    <NotasProveedor>
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
                <Route path="/" element={<HomePagina />} />
                <Route path="/discentes" element={<DiscentesPagina />} />
                <Route path="/modulos" element={<ModulosPagina />} />
                <Route path="/acercade" element={<AcercaDePagina />} />
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
    </NotasProveedor>
  );
}

export default App;

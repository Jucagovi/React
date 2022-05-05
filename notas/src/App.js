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
import DiscentesPagina from "./pages/DiscentesPagina";
import { ModulosProveedor } from "./contextos/modulosContext";
import { DiscentesProveedor } from "./contextos/discentesContext";
import { PrcaticasProveedor } from "./contextos/practicasContexto";
import PracticasPagina from "./pages/PracticasPagina";

function App() {
  return (
    <React.Fragment>
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
                <Route
                  path="/practicas"
                  element={
                    <PrcaticasProveedor>
                      <PracticasPagina />
                    </PrcaticasProveedor>
                  }
                />
                <Route
                  path="/discentes"
                  element={
                    <DiscentesProveedor>
                      <DiscentesPagina />
                    </DiscentesProveedor>
                  }
                />
                <Route
                  path="/modulos"
                  element={
                    <ModulosProveedor>
                      <ModulosPagina />
                    </ModulosProveedor>
                  }
                />
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
    </React.Fragment>
  );
}

export default App;

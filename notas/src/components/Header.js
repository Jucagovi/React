import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  // Poniendo el estilo de pestaña activa
  const [activeTab, setActiveTab] = useState("Home");
  // Si escriben directamente la dirección en el navegador no se actualiza el estilo
  // de este modo sí lo hace.
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("Add");
    }
  });

  return (
    <React.Fragment>
      <div className="header">
        <p className="logo">
          Notas App React {activeTab} - {location.pathname}
        </p>
        <div className="header-right">
          <Link to="/">
            <p
              className={`${activeTab === "Home"} ? "active" : ""`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </p>
          </Link>
          <Link to="/add">
            <p
              className={`${activeTab === "Add"} ? "active" : ""`}
              onClick={() => setActiveTab("Add")}
            >
              Añadir alumno
            </p>
          </Link>
          <Link to="/update">
            <p
              className={`${activeTab === "View"} ? "active" : ""`}
              onClick={() => setActiveTab("View")}
            >
              Ver progresión
            </p>
          </Link>
        </div>
      </div>
      <h2>Header</h2>
    </React.Fragment>
  );
}

export default Header;

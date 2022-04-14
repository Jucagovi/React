import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <p className="logo">Notas App React</p>
        <div className="header-right">
          <NavLink to="/" className={(data) => (data.isActive ? "active" : "")}>
            Inicio
          </NavLink>
          <NavLink
            to="/add"
            className={(data) => (data.isActive ? "active" : "")}
          >
            Prácticas
          </NavLink>
          <NavLink
            to="/addnota"
            className={({ isActive }) => (isActive ? "active" : "")} // Otra forma de hacerlo: deconstruyendo el objeto data.
          >
            Notas
          </NavLink>
          <NavLink
            to="/view/:id"
            className={({ isActive }) => (isActive ? "active" : "")} // Otra forma de hacerlo: deconstruyendo el objeto data.
          >
            Ver progresión
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;

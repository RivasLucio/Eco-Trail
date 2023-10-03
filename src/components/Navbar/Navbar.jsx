import React from "react";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar">
          <ul>
            <li className="submenu-container">
              <NavLink to="/Nosotros">Nosotros</NavLink>
              <ul className="submenu">
                <li>
                  <NavLink to="/Nosotros#mision">Misión y Visión</NavLink>
                </li>
                <li>
                  <NavLink to="/Nosotros#quienes-somos">
                    ¿Quiénes somos?
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Nosotros#contacto">Contacto</NavLink>
                </li>
              </ul>
            </li>
              <li className="submenu-container">
                <NavLink to="/Cursos">Cursos y talleres</NavLink>
                <ul className="submenu">
                  <li>
                    <NavLink to="/Cursos/basico">Nivel básico</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Cursos/avanzado">Nivel avanzado</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Cursos/profesional">
                      Nivel profesional
                    </NavLink>
                  </li>
                </ul>
              </li>
            <li>
              <NavLink to="/Practicas">Prácticas</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

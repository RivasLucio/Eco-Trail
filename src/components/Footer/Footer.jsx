import React from 'react'
import logo from "../../assets/img/logo.png";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt=""/>
        </div>
        <div className="footer-content">
            <ul>
                <li>Acerca de ETMU</li>
                <li>Contacto</li>
            </ul>
        </div>
    </div>
  )
}

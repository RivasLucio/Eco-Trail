import React from 'react';
import wpp from "../../assets/img/wpp.png";
import "./Wpp.css";
import { Link } from 'react-router-dom';

export const Wpp = () => {
  const whatsappLink = 'https://wa.me/59892394876?text=Hola,%20deseo%20informacion%20sobre%20ecoTrail';

  return (
    <div className='wpp'>
      <Link to={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img src={wpp} alt="WhatsApp" />
      </Link>
    </div>
  );
};

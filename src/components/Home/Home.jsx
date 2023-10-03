import React from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img from "../../assets/img/img4.png";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.png";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home" style={{ "--img": `url(${img1})` }}></div>
      <div className="home home2" style={{ "--img": `url(${img2})` }}>
        <h1>Nosotros</h1>
        <p>
          ETMU (Escuela de Trekking y Montañismo Uruguay) surge con el objetivo
          de acercar a las personas las actividades en montaña y serranias.
          Ofrecemos una escalera de formacion y actividades para que todos (sin
          importar la experiencia que tengan hoy) puedan participar e ir
          superandose
        </p>
        <div className="btn">
          <Link to="/Nosotros">Ver más</Link>
        </div>
      </div>
      <div className="cursos-inicio home">
        <div className="cursos-inicio-left">
          <img src={img} alt="" />
        </div>
        <div className="cursos-inicio-right homeP">
          <h1>Cursos y Talleres</h1>
          <p>
            Cursos y talleres <br /> <br />
            Los cursos idelmente tienen modalidad 100% presencial, y en los
            casos que son más largos se puede realizar la parte teórica online y
            con repaso teórico presencial y módulos prácticos. <br /> <br />
            En que consisten <br /> <br />
            Consisten en profundizar todos los conceptos propuestos para el
            nivel de curso que se está realizando, y despejar todas las dudas.
            <br /> <br />
            Duración, entre 1 dia y varios dias.
          </p>
          <div className="btn btnHome">
            <Link to="/Cursos">Ver más</Link>
          </div>
        </div>
      </div>
      <div className="home" style={{ "--img": `url(${img4})` }}>
        <h1>Prácticas</h1>
        <div className="btn">
          <Link to="/Practicas">Ver más</Link>
        </div>
      </div>
      <div className="home" style={{ "--img": `url(${img5})` }}>
        <h1>Blog</h1>
        <div className="btn">
          <Link to="/Blog">Ver más</Link>
        </div>
      </div>
    </>
  );
};

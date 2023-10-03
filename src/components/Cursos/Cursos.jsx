import React from "react";
import "./Cursos.css";
import img from "../../assets/img/img4.png";
import cursob from "../../assets/img/cursob.png";
import cursoa from "../../assets/img/cursoa.png";
import cursoe from "../../assets/img/cursoe.png";
import { Link } from "react-router-dom";

export const Cursos = () => {
  return (
    <>
      <div className="cursos-inicio">
        <div className="cursos-inicio-left">
          <img src={img} alt="" />
        </div>
        <div className="cursos-inicio-right">
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
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-top">
            <div className="card-top-1">
              <span>1</span>
              <div className="card-top-1-tittle">
                <h2>Nivel Básico</h2>
                <h3>Subhead</h3>
              </div>
            </div>
            <img src={cursob} alt="" />
          </div>
          <div className="card-bottom">
            <h3>Title</h3>
            <h4>Subhead</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.</p>
            <Link to="/Cursos/basico">Ver más</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-top">
            <div className="card-top-1">
              <span>2</span>
              <div className="card-top-1-tittle">
                <h2>Nivel Avanzado</h2>
                <h3>Subhead</h3>
              </div>
            </div>
            <img src={cursoa} alt="" />
          </div>
          <div className="card-bottom">
            <h3>Title</h3>
            <h4>Subhead</h4>
            <p>Lorem ipsum dofsafaffasdfaslor sit amet consectetur adipisicing elit. Dolores, doloremque.</p>
            <Link to="/Cursos/avanzado">Ver más</Link>
          </div>
        </div>
        <div className="card">
          <div className="card-top">
            <div className="card-top-1">
              <span>3</span>
              <div className="card-top-1-tittle">
                <h2>Nivel profesional</h2>
                <h3>Subhead</h3>
              </div>
            </div>
            <img src={cursoe} alt="" />
          </div>
          <div className="card-bottom">
            <h3>Title</h3>
            <h4>Subhead</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.</p>
            <Link to="/Cursos/profesional">Ver más</Link>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./AboutUs.css";
import img from "../../assets/img/img3.jpg";

export const AboutUs = () => {
  const missionRef = useRef(null);
  const quienesSomosRef = useRef(null);
  const contactoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#mision" && missionRef.current) {
      // Si la ubicación incluye "#mision," desplázate a la sección "Misión"
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }else if (location.hash === "#quienes-somos" && quienesSomosRef.current) {
      // Si la ubicación incluye "#quienes-somos," desplázate a la sección "Quiénes Somos"
      quienesSomosRef.current.scrollIntoView({ behavior: "smooth" });
    }else if (location.hash === "#contacto" && contactoRef.current) {
      // Si la ubicación incluye "#quienes-somos," desplázate a la sección "Quiénes Somos"
      contactoRef.current.scrollIntoView({ behavior: "smooth" });
    }
     else {
      // En otras ubicaciones, desplázate al principio de la página
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <div className="aboutUs"></div>
      <div className="mision" id="mision" ref={missionRef}>
        <ul>
          <h3>Misión</h3>
          <li>
            Ser reconocidos como institución de referencia en la formación en
            trekking y montañismo en Uruguay, y llevar dichas formaciones a
            todos los departamentos del país.
          </li>
          <h3>Visión</h3>
          <li>
            Queremos acercar a más uruguayos a las actividades de conexión con
            la naturaleza, a través de nuestro cuerpo físico, mental y
            espiritual, de manera autónoma y segura.
          </li>
        </ul>
      </div>
      <div className="quienes-somos" id="quienes-somos" ref={quienesSomosRef}>
        <img src={img} alt="" />
        <p>
          Mi nombre es Enrique Duarte, tengo 35 años, y 12 años atrás tuve mi
          primer acercamiento a la cordillera de los Andes (precordillera de
          Santiago de Chile). Desde ese momento la montaña siempre ha estado en
          el horizonte. En todos estos años visité varios Parques Nacionales
          alrededor del mundo donde he realizado actividades de manera autónoma
          y también guiadas. Destaco el tiempo vivido en el Westland National
          Park (Nueva Zelanda) donde trabajé entre 2014 y 2017. Recuerdo que
          cada día libre lo usaba para incursionar en la montaña y cada vez ir
          un poco más lejos, subir un poco más alto, aprendiendo de la práctica
          y error, y de consejos de los amigos guías del glaciar Franz Josef. En
          2015 durante unas vacaciones conocí la Patagonia y me propuse volver
          para ser guía en el Parque Nacional Torres del Paine (Patagonia
          Chilena). Apenas me instalé en Patagonia, trabajé para CONAF (donde
          aprendí mucho de los guardaparques) y luego en un tour operador local
          (donde aprendí muchísimo de los guías locales), realicé mi primer WFR,
          tomé cursos de gestión de riesgo de actividades al aire libre, leí
          varios libros de historia local y regional, hasta que me senti
          capacitado para rendir pruebas teóricas y prácticas de guia frente a
          distintas instituciones públicas. Al día de hoy sigo con todas mis
          credenciales vigentes desde 2018, habiendo compartido tiempo y
          experiencias en montaña con guías de diferentes países. En 2019 volví
          tomar cursos de Seguridad en Montaña y Manejo de Cuerdas (estándares
          UIAA - UIAGM) en Magallanes, en 2020 Planificacion y Gestion de Riesgo
          en actividades al aire libre en Santiago, en 2021 Curso de Montañismo
          con la Escuela Nacional de Montaña de Chile (ENAM-FEACH), y 2022
          realicé el Diplomado Guías de Turismo especializados en Ambiente de
          Montaña para la actividad de Excursionismo o Trekking, dictado por la
          Universidad Andrés Bello de Chile con 196 horas teóricas y 17 dias de
          instrucción práctica en los andes centrales. S
        </p>
      </div>
      {/* <div className="contacto" id="contacto" ref={contactoRef}>
        <h2>CONTACTO</h2>
      </div> */}

    </>
  );
};

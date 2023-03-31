import React from "react";
import styles from "./Info.module.css";

import yo from "../../img/me.jpg";
const About = (props) => {
  return (
    <>
      <p>About Me</p>

      <div className={styles.infoProyect}>
        <img className={styles.imgProyect} alt="Author" src={yo} />
        <div>
          Hola! Mi nombre es <b>Leandro Martinez</b>, soy alumno de{" "}
          <a href="soyhenry.com">HENRY</a> y actualmente estoy cursando la
          carrera de <b>Desarrollador FullStack.</b>
          <br /><br /><br /><br />
          <hr></hr>Este proyecto forma parte de una Homework integradora del
          Modulo 2, fue desarrollada aplicando conocimientos de{" "}
          <b>Html, CSS, Javascript, React & Redux.</b>{" "}
        </div>
      </div>
      <div className={styles.info2Proyect}>
        Muchas gracias por pasar por aquí, si querés dejarme algún feedback para
        mejorar podés escribirme a mi{" "}
        <a href="https://www.linkedin.com/in/lean0mar">
          LinkedIn{" "}
        </a>
      </div>
    </>
  );
};
export default About;

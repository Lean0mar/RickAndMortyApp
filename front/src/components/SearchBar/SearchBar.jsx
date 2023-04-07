import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Nav/Nav.module.css"

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

    //Funcion que devuelve un numero random entre dos numeros
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      // The maximum is inclusive and the minimum is inclusive
    }
  
    //Llamamos a la función OnSearch y le pasamos como parametro un id random
    //De esta forma generamos una carta random
    const randomCharacter = () => {
      onSearch(getRandomIntInclusive(1, 826));
    };

  return (
    <div className={styles.bar}>
      <input
        type="search"
        className={styles.searchInput}
        onChange={handleChange}
      />
      <button className={styles.searchButton} onClick={() => onSearch(id)}>
        Agregar
      </button>
      <Link to="/home" onClick={randomCharacter} className={styles.menuLink}>
            <h3>Aleatorio</h3>
      </Link>
    </div>
  );
}
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../../redux/actions";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


function Card({ id, name, species, gender, image, onClose, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const addFavorite = (character) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("ok"));
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
    alert("Eliminado con éxito");
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      //
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [id, myFavorites]);

  return (
    <div className={styles.Card}>
        <div className={styles.Top}>
            <div className={styles.Fav}>
                {isFav ? (
                <button onClick={handleFavorite} className={styles.botoFav} >❤️</button>
                ) : (
                <button onClick={handleFavorite} className={styles.botoFav} >🤍</button>
                )}
            </div>
            <div className={styles.Exit}>
                <button onClick={() => onClose(id)} className={styles.botoExit}>
                X
                </button>
            </div>
      </div>
      <Link to={`/detail/${id}`}>
      <div className={styles.nameCard}>
                  <h2>{name}</h2>
               </div>
      </Link>
      <img className={styles.imgCard} src={image} alt="" />

      <div className={styles.infoCard}>
               <h2>Gender: {gender}</h2>
               <h2>Specie: {species}</h2>
            </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
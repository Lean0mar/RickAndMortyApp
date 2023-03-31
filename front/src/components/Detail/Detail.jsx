import useCharacter from "../../hooks/useCharacter";
import styles from "./Detail.module.css"

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={styles.conteiner}>
      {character.name ? (
        <div className={styles.info}>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
import Card from '../Card/Card';
import styles from '../Card/Card.module.css';
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";

export default function Cards({ characters, onClose }) {
   const dispatch = useDispatch();
 
   useEffect(() => {
     dispatch(getFavorites());
   }, [dispatch]);

   return (
      <div className={styles.Cards}>
         {
            characters.map(({id, name, species, gender, image}) => {
               return(
                  <Card
                     key={id} 
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     id={id}
                     onClose={() => onClose(id)}
                  />
               );  
            })
         }
      </div>
   );
}
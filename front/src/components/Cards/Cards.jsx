import Card from '../Card/Card';
import styles from '../Card/Card.module.css';


export default function Cards({characters, onClose}) {
   
   return (
      <div className={styles.Cards}>
         {
            characters.map(({id, name, species, gender, image}) => {
               return(
                  <Card
                     key ={id} 
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
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import icon from "../../img/icon-name.png";

const Nav = ({ onSearch, randomCharacter, logout }) => {
  const url = useLocation();
  if (url.pathname !== "/") {
    return (
      <nav className={styles.NavBar}>
        <div className={styles.menuLists}>
          <img className={styles.imgLogo} alt="Author" src={icon} />

          <div className={styles.menuLinks}>
            <Link to="/about" className={styles.menuLink}>
              <h3>About</h3>
            </Link>
            <Link to="/home" className={styles.menuLink}>
              <h3>Home</h3>
            </Link>
            <Link onClick={randomCharacter} className={styles.menuLink}>
            <h3>Aleatorio</h3>
            </Link>
            <Link to="/favorites" className={styles.menuLink}>
              <h3>Favorites</h3>
            </Link>
          </div>
          <div className={styles.Searchbar}>
          <SearchBar onSearch={onSearch} className={styles.searchBar} />
          </div>
            <div className={styles.searchLogout}>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    );
  }
  return;
};

export default Nav;

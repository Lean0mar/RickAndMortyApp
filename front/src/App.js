import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'rickandmorty@gmail.com'
  const password = 'rick1234'

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  // ! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
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

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario incorrecto");
    }
  };

    //FUNCION LOGOUT
    function logout() {
      setAccess(false);
      navigate("/");
    }

  // ! RENDER
  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} randomCharacter={randomCharacter} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
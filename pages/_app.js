import GlobalStyle from "../styles";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [favourites, setFavourites] = useState([]);

  // Favouriten beim Start aus dem localStorage laden
  useEffect(() => {
    const stored = localStorage.getItem(favourites);
    if (stored) setFavourites(JSON.parse(stored));
  }, []);

  // FAvouriten bei jeder Änderung wieder speichern
  useEffect(() => {
    localStorage.setItem(favourites, JSON.stringify(favourites));
  }, [favourites]);

  // umschalter
  const toggleFavourite = (slug) => {
    setFavourites((prev) =>
      prev.includes(slug) ? prev.filter(id !== slug) : [...prev, slug]
    );
  };
  // pruefen ob es ein Favourit ist
  const isFavourite = (slug) => favourites.includes(slug);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
      />
    </>
  );
}
